import json
import requests
from bs4 import BeautifulSoup

DOMAIN = "https://cvc.cervantes.es"
BASE_URL = DOMAIN + "/lengua/refranero/"
URL_PROVERB_LIST = BASE_URL + "listado.aspx?letra={letter}"
URL_PROVERB_BY_ID = BASE_URL + "ficha.aspx?Par={refran_id}&Lng=0"
PROVERB_LIST_LETTERS = "ABCDEFGHIJLMNOPQRSTUVYZ"
OUTPUT_PATH = "./src/data/proverbs.json"


headers = {
    "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0"
}


def get_soup(url):
    r = requests.get(url, headers=headers)
    return BeautifulSoup(r.text, "html.parser")


def list_proverbs_by_char(letter):
    url = URL_PROVERB_LIST.format(letter=letter)
    soup = get_soup(url)
    # find all //ol[@id="lista_az"]/li/a
    return [
        BASE_URL + a["href"]
        for a in soup.find_all("ol", id="lista_az")[0].find_all("a")
    ]


def _parse_proverb_info(proverb_info, url):
    parser = {
        "proverb_type": "Tipo: ",
        "language": "Idioma: ",
        "proverb": "Enunciado: ",
        "tags": "Ideas clave: ",
        "meaning": "Significado: ",
        "usable": "Marcador de uso: ",
        "observations": "Observaciones: ",
        "comments": "Comentario al marcador de uso: ",
    }
    output = {}
    for key, field_text in parser.items():
        # Find strong by text
        strong = proverb_info.find("strong", string=field_text)
        if strong:
            # Remove strong tag and get text from parent
            p = strong.parent
            p.strong.decompose()
            output[key] = p.text.strip()

            if key == "tags":
                output[key] = [k.strip() for k in output[key].split("-")]
        else:
            output[key] = ""

    output["url"] = url
    output["id"] = url.split("Par=")[1].split("&")[0]

    return output


def get_proverb(url):
    soup = get_soup(url)
    proverb_info_div = soup.find("div", class_="tabbertab")
    proverb = _parse_proverb_info(proverb_info_div, url)

    # Some proverbs urls are empty (https://cvc.cervantes.es/lengua/refranero/ficha.aspx?Par=59628&Lng=0)
    if "proverb" not in proverb.keys():
        print(f'[X] Refrán vacío:"{url}"')
        return None
    return proverb


def save_to_json(proverbs):
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(proverbs, f, ensure_ascii=False)


proverbs = []
for letter in PROVERB_LIST_LETTERS:
    print(f"[+] Obteniendo refranes para la letra {letter}")
    for proverb_url in list_proverbs_by_char(letter):
        print(f'[ ] Obteniendo refrán "{proverb_url}"')
        proverb = get_proverb(proverb_url)
        if proverb:
            proverbs.append(proverb)

save_to_json(proverbs)
print(f"[+] Exportado a {OUTPUT_PATH}")
