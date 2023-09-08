export type Proverb = {
    proverb_type: ProverbType;
    language:     Language;
    proverb:      string;
    tags:         string[];
    meaning:      string;
    usable:       Usable;
    observations: string;
    comments:     string;
    url:          string;
    id:           string;
}

export enum Language {
    Spanish = "Español",
}

export enum ProverbType {
    Aforismo = "Aforismo",
    Apotegma = "Apotegma",
    Cliche = "Cliché",
    Dialogismo = "Dialogismo",
    Empty = "",
    FraseProverbial = "Frase proverbial",
    LocucionProverbial = "Locución proverbial",
    Proverbio = "Proverbio",
    Refran = "Refrán",
    RefranDialogado = "Refrán dialogado",
    RefranMeteorologico = "Refrán meteorológico",
    RefranTemporal = "Refrán temporal",
}

export enum Usable {
    UsoActual = "De uso actual",
    Empty = "",
    Desuso = "En desuso",
    MuyUsado = "Muy usado",
    PocoUsado = "Poco usado",
}
