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
    slug:         string;
    id:           number;
}

export enum Language {
    Spanish = "Español",
}

export enum ProverbType {
    Empty = "",
    // Frase o sentencia breve y doctrinal que se propone como regla en alguna ciencia o arte
    Aforismo = "Aforismo",
    // Figura que consiste en expresar en forma de diálogo las ideas o los sentimientos de los personajes de una obra
    Dialogismo = "Dialogismo",
    // Dicho grave y breve que contiene una doctrina o enseñanza moral. Generalmente culta.
    Proverbio = "Proverbio",
    FraseProverbial = "Frase proverbial",
    LocucionProverbial = "Locución proverbial",
    // Dicho agudo y sentencioso de uso común
    Refran = "Refrán",
    RefranDialogado = "Refrán dialogado",
    RefranMeteorologico = "Refrán meteorológico",
    // Obsoleto
    RefranTemporal = "Refrán temporal",
}

export enum Usable {
    UsoActual = "De uso actual",
    Empty = "",
    Desuso = "En desuso",
    MuyUsado = "Muy usado",
    PocoUsado = "Poco usado",
}
