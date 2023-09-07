import json
import requests
from bs4 import BeautifulSoup

DOMAIN = "https://cvc.cervantes.es"
BASE_URL = DOMAIN + "/lengua/refranero/"
URL_PROVERB_LIST = BASE_URL + "listado.aspx?letra={letter}"
URL_PROVERB_BY_ID = BASE_URL + "ficha.aspx?Par={refran_id}&Lng=0"
PROVERB_LIST_LETTERS = "ABCDEFGHIJLMNOPQRSTUVYZ"
OUTPUT_PATH = "./src/constants/proverbs.json"


headers = {
    "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0"
}


def get_soup(url):
    r = requests.get(url, headers=headers)
    return BeautifulSoup(r.text, "html.parser")


def get_proverbs_from_letter(letter):
    url = URL_PROVERB_LIST.format(letter=letter)
    soup = get_soup(url)
    # find all //ol[@id="lista_az"]/li/a
    return [
        BASE_URL + a["href"]
        for a in soup.find_all("ol", id="lista_az")[0].find_all("a")
    ]


def _parse_proverb_info(proverb_info):
    parser = {
        "proverb_type": 0,
        "language": 1,
        "proverb": 2,
        "keys": 3,
        "meaning": 4,
        "usable": 5,
        "observations": 6,
    }
    proverb = {}
    for key, value in parser.items():
        if len(proverb_info) > value:
            proverb[key] = proverb_info[value].text.split(":")[1].strip()
        else:
            proverb[key] = ""
    return proverb


def get_proverb_info(url):
    soup = get_soup(url)
    proverb_info_div = soup.find_all("div", class_="tabbertab")[0].find_all("p")
    proverb = _parse_proverb_info(proverb_info_div)
    return proverb


def save_to_json(proverbs):
    with open(OUTPUT_PATH, "w") as f:
        json.dump(proverbs, f, ensure_ascii=False)


proverbs = []
for letter in PROVERB_LIST_LETTERS:
    print(f"Obteniendo refranes para la letra {letter}")
    proverbs_urls = get_proverbs_from_letter(letter)
    for proverb_url in proverbs_urls:
        print(f"Obteniendo refran {proverb_url}")
        proverb = get_proverb_info(proverb_url)
        if proverb["proverb"]:
            proverbs.append(proverb)

save_to_json(proverbs)
