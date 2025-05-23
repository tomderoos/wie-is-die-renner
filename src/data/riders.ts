export interface Rider {
  number: number;
  name: string;
  team: string;
  pcsUrl: string;
  country: string; // ISO landcode, bijv. 'SLO', 'ITA', 'GER'
}

export const riders: Rider[] = [
  // Red Bull - BORA - hansgrohe
  { number: 1, name: "ROGLIČ Primož", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/primoz-roglic", country: "SLO" },
  { number: 2, name: "ALEOTTI Giovanni", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/giovanni-aleotti", country: "ITA" },
  { number: 3, name: "DENZ Nico", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/nico-denz", country: "GER" },
  { number: 4, name: "HINDLEY Jai", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/jai-hindley", country: "AUS" },
  { number: 5, name: "MARTÍNEZ Daniel Felipe", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/daniel-felipe-martinez", country: "COL" },
  { number: 6, name: "MOSCON Gianni", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/gianni-moscon", country: "ITA" },
  { number: 7, name: "PELLIZZARI Giulio", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/giulio-pellizzari", country: "ITA" },
  { number: 8, name: "TRATNIK Jan", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/jan-tratnik", country: "SLO" },

  // Alpecin - Deceuninck
  { number: 11, name: "GROVES Kaden", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/kaden-groves", country: "BEL" },
  { number: 12, name: "HERMANS Quinten", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/quinten-hermans", country: "BEL" },
  { number: 13, name: "HOLLMANN Juri", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/juri-hollmann", country: "GER" },
  { number: 14, name: "JANSSENS Jimmy", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/jimmy-janssens", country: "BEL" },
  { number: 15, name: "KIELICH Timo", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/timo-kielich", country: "GER" },
  { number: 16, name: "PLANCKAERT Edward", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/edward-planckaert", country: "BEL" },
  { number: 17, name: "VAN DEN BOSSCHE Fabio", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/fabio-van-den-bossche", country: "BEL" },
  { number: 18, name: "PLOWRIGHT Jensen", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/jensen-plowright", country: "AUS" },

  // Arkéa - B&B Hotels
  { number: 21, name: "VERRE Alessandro", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/alessandro-verre", country: "ITA" },
  { number: 22, name: "EPIS Giosuè", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/giosue-epis", country: "ITA" },
  { number: 23, name: "GUGLIELMI Simon", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/simon-guglielmi", country: "ITA" },
  { number: 24, name: "HUYS Laurens", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/laurens-huys", country: "BEL" },
  { number: 25, name: "MOZZATO Luca", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/luca-mozzato", country: "ITA" },
  { number: 26, name: "RIES Michel", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/michel-ries", country: "BEL" },
  { number: 27, name: "SVESTAD-BÅRDSENG Embret", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/embret-svestad-bardseng", country: "NOR" },
  { number: 28, name: "TJØTTA Martin", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/martin-tjotta", country: "NOR" },

  // Bahrain - Victorious
  { number: 31, name: "TIBERI Antonio", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/antonio-tiberi", country: "ITA" },
  { number: 32, name: "BILBAO Pello", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/pello-bilbao", country: "ESP" },
  { number: 33, name: "CARUSO Damiano", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/damiano-caruso", country: "ITA" },
  { number: 34, name: "EULÁLIO Afonso", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/afonso-eulalio", country: "POR" },
  { number: 35, name: "GOVEKAR Matevž", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/matevz-govekar", country: "SLO" },
  { number: 36, name: "MIHOLJEVIĆ Fran", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/fran-miholjevic", country: "SRB" },
  { number: 37, name: "PASQUALON Andrea", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/andrea-pasqualon", country: "ITA" },
  { number: 38, name: "ZAMBANINI Edoardo", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/edoardo-zambanini", country: "ITA" },

  // Cofidis
  { number: 41, name: "FRETIN Milan", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/milan-fretin", country: "ITA" },
  { number: 42, name: "DEBEAUMARCHÉ Nicolas", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/nicolas-debeaumarche", country: "BEL" },
  { number: 43, name: "LASTRA Jonathan", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/jonathan-lastra", country: "BEL" },
  { number: 44, name: "MAAS Jan", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/jan-maas", country: "BEL" },
  { number: 45, name: "MONIQUET Sylvain", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/sylvain-moniquet", country: "BEL" },
  { number: 46, name: "OLDANI Stefano", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/stefano-oldani", country: "ITA" },
  { number: 47, name: "PEREZ Anthony", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/anthony-perez", country: "ESP" },
  { number: 48, name: "SAMITIER Sergio", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/sergio-samitier", country: "ESP" },

  // Decathlon AG2R La Mondiale Team
  { number: 51, name: "BENNETT Sam", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/sam-bennett", country: "AUS" },
  { number: 52, name: "BOUCHARD Geoffrey", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/geoffrey-bouchard", country: "BEL" },
  { number: 53, name: "DE BONDT Dries", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/dries-de-bondt", country: "BEL" },
  { number: 54, name: "DEWULF Stan", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/stan-dewulf", country: "BEL" },
  { number: 55, name: "GODON Dorian", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/dorian-godon", country: "BEL" },
  { number: 56, name: "GUDMESTAD Tord", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/tord-gudmestad", country: "NOR" },
  { number: 57, name: "PRODHOMME Nicolas", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/nicolas-prodhomme", country: "BEL" },
  { number: 58, name: "VENDRAME Andrea", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/andrea-vendrame", country: "ITA" },

  // EF Education - EasyPost
  { number: 61, name: "CARAPAZ Richard", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/richard-carapaz", country: "ECU" },
  { number: 62, name: "ASGREEN Kasper", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/kasper-asgreen", country: "DEN" },
  { number: 63, name: "CEPEDA Jefferson Alexander", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/jefferson-alexander-cepeda", country: "COL" },
  { number: 64, name: "DOULL Owain", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/owain-doull", country: "GBR" },
  { number: 65, name: "HONORÉ Mikkel Frølich", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/mikkel-honore", country: "DEN" },
  { number: 66, name: "RAFFERTY Darren", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/darren-rafferty", country: "AUS" },
  { number: 67, name: "SHAW James", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/james-shaw", country: "GBR" },
  { number: 68, name: "STEINHAUSER Georg", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/georg-steinhauser", country: "AUT" },

  // Groupama - FDJ
  { number: 71, name: "GAUDU David", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/david-gaudu", country: "FRA" },
  { number: 72, name: "BYSTRØM Sven Erik", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/sven-erik-bystrom", country: "SWE" },
  { number: 73, name: "DAVY Clément", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/clement-davy", country: "FRA" },
  { number: 74, name: "GENIETS Kevin", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/kevin-geniets", country: "BEL" },
  { number: 75, name: "GERMANI Lorenzo", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/lorenzo-germani", country: "ITA" },
  { number: 76, name: "PACHER Quentin", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/quentin-pacher", country: "FRA" },
  { number: 77, name: "PALENI Enzo", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/enzo-paleni", country: "ITA" },
  { number: 78, name: "ROCHAS Rémy", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/remy-rochas", country: "FRA" },

  // INEOS Grenadiers
  { number: 81, name: "BERNAL Egan", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/egan-bernal", country: "COL" },
  { number: 82, name: "ARENSMAN Thymen", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/thymen-arensman", country: "NED" },
  { number: 83, name: "CASTROVIEJO Jonathan", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/jonathan-castroviejo", country: "ESP" },
  { number: 84, name: "HAMILTON Lucas", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/lucas-hamilton", country: "AUS" },
  { number: 85, name: "HEIDUK Kim", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/kim-heiduk", country: "GER" },
  { number: 86, name: "RIVERA Brandon Smith", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/brandon-smith-rivera-vargas", country: "USA" },
  { number: 87, name: "TARLING Joshua", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/joshua-tarling", country: "GBR" },
  { number: 88, name: "TURNER Ben", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/ben-turner", country: "GBR" },

  // Intermarché - Wanty
  { number: 91, name: "MEINTJES Louis", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/louis-meintjes", country: "BEL" },
  { number: 92, name: "BUSATTO Francesco", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/francesco-busatto", country: "ITA" },
  { number: 93, name: "COLLEONI Kevin", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/kevin-colleoni", country: "ITA" },
  { number: 94, name: "PETILLI Simone", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/simone-petilli", country: "ITA" },
  { number: 95, name: "SMITH Dion", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/dion-smith", country: "GBR" },
  { number: 96, name: "THIJSSEN Gerben", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/gerben-thijssen", country: "NED" },
  { number: 97, name: "VAN DER HOORN Taco", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/taco-van-der-hoorn", country: "NED" },
  { number: 98, name: "VAN HOECKE Gijs", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/gijs-van-hoecke", country: "NED" },

  // Israel - Premier Tech
  { number: 101, name: "GEE Derek", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/derek-gee", country: "USA" },
  { number: 102, name: "CLARKE Simon", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/simon-clarke", country: "GBR" },
  { number: 103, name: "FRIGO Marco", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/marco-frigo", country: "ITA" },
  { number: 104, name: "FUGLSANG Jakob", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/jakob-fuglsang", country: "DEN" },
  { number: 105, name: "HIRT Jan", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/jan-hirt", country: "GER" },
  { number: 106, name: "HOULE Hugo", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/hugo-houle", country: "CAN" },
  { number: 107, name: "SCHULTZ Nick", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/nick-schultz", country: "USA" },
  { number: 109, name: "STRONG Corbin", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/corbin-strong", country: "USA" },

  // Lidl - Trek
  { number: 111, name: "CICCONE Giulio", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/giulio-ciccone", country: "ITA" },
  { number: 112, name: "HOOLE Daan", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/daan-hoole", country: "BEL" },
  { number: 113, name: "KONRAD Patrick", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/patrick-konrad", country: "AUT" },
  { number: 114, name: "KRAGH ANDERSEN Søren", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/soren-kragh-andersen", country: "DEN" },
  { number: 115, name: "MOSCA Jacopo", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/jacopo-mosca", country: "ITA" },
  { number: 116, name: "PEDERSEN Mads", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/mads-pedersen", country: "DEN" },
  { number: 117, name: "VACEK Mathias", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/mathias-vacek", country: "CZE" },
  { number: 118, name: "VERONA Carlos", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/carlos-verona", country: "ESP" },

  // Movistar Team
  { number: 121, name: "QUINTANA Nairo", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/nairo-quintana", country: "COL" },
  { number: 122, name: "AULAR Orluis", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/orluis-aular", country: "ESP" },
  { number: 123, name: "BARRENETXEA Jon", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/jon-barrenetxea-golzarri", country: "ESP" },
  { number: 124, name: "CEPEDA Jefferson Alveiro", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/jefferson-cepeda-hernandez", country: "COL" },
  { number: 125, name: "FORMOLO Davide", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/davide-formolo", country: "ITA" },
  { number: 126, name: "MILESI Lorenzo", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/lorenzo-milesi", country: "ITA" },
  { number: 127, name: "RUBIO Einer", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/einer-rubio", country: "ESP" },
  { number: 128, name: "TORRES Albert", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/albert-torres", country: "ESP" },

  // Q36.5 Pro Cycling Team
  { number: 131, name: "PIDCOCK Thomas", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/thomas-pidcock", country: "GBR" },
  { number: 132, name: "AZPARREN Xabier Mikel", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/xabier-mikel-azparren-irurzun", country: "ESP" },
  { number: 133, name: "DONOVAN Mark", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/mark-donovan", country: "GBR" },
  { number: 134, name: "HOWSON Damien", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/damien-howson", country: "GBR" },
  { number: 135, name: "LIEPIŅŠ Emīls", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/emils-liepins", country: "LAT" },
  { number: 136, name: "MOSCHETTI Matteo", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/matteo-moschetti", country: "ITA" },
  { number: 137, name: "VADER Milan", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/milan-vader", country: "CRO" },
  { number: 138, name: "ZUKOWSKY Nickolas", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/nickolas-zukowsky", country: "USA" },

  // Soudal Quick-Step
  { number: 141, name: "LANDA Mikel", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/mikel-landa", country: "ESP" },
  { number: 142, name: "CATTANEO Mattia", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/mattia-cattaneo", country: "ITA" },
  { number: 143, name: "ČERNÝ Josef", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/josef-cerny", country: "CZE" },
  { number: 144, name: "GAROFOLI Gianmarco", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/gianmarco-garofoli", country: "ITA" },
  { number: 145, name: "HAYTER Ethan", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/ethan-hayter", country: "AUS" },
  { number: 146, name: "KNOX James", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/james-knox", country: "GBR" },
  { number: 147, name: "LAMPERTI Luke", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/luke-lamperti", country: "AUS" },
  { number: 148, name: "MAGNIER Paul", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/paul-magnier", country: "BEL" },

  // Team Jayco AlUla
  { number: 151, name: "HARPER Chris", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/chris-harper", country: "AUS" },
  { number: 152, name: "BOUWMAN Koen", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/koen-bouwman", country: "NED" },
  { number: 153, name: "DE PRETTO Davide", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/davide-de-pretto", country: "ITA" },
  { number: 154, name: "DOUBLE Paul", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/paul-double", country: "GBR" },
  { number: 155, name: "ENGELHARDT Felix", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/felix-engelhardt", country: "GER" },
  { number: 156, name: "HEPBURN Michael", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/michael-hepburn", country: "GBR" },
  { number: 157, name: "PLAPP Luke", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/luke-plapp", country: "GBR" },
  { number: 158, name: "ZANA Filippo", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/filippo-zana", country: "ITA" },

  // Team Picnic PostNL
  { number: 161, name: "BARDET Romain", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/romain-bardet", country: "FRA" },
  { number: 162, name: "EDMONDSON Alex", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/alexander-edmondson", country: "GBR" },
  { number: 163, name: "HAMILTON Chris", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/chris-hamilton", country: "GBR" },
  { number: 164, name: "LEEMREIZE Gijs", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/gijs-leemreize", country: "NED" },
  { number: 165, name: "MÄRKL Niklas", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/niklas-markl", country: "GER" },
  { number: 166, name: "POOLE Max", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/max-poole", country: "GBR" },
  { number: 167, name: "VAN UDEN Casper", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/casper-van-uden", country: "NED" },
  { number: 168, name: "WELTEN Bram", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/bram-welten", country: "NED" },

  // Team Polti VisitMalta
  { number: 171, name: "PIGANZOLI Davide", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/davide-piganzoli", country: "ITA" },
  { number: 172, name: "BAIS Davide", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/davide-bais", country: "ITA" },
  { number: 173, name: "BAIS Mattia", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/mattia-bais", country: "ITA" },
  { number: 174, name: "LONARDI Giovanni", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/giovanni-lonardi", country: "ITA" },
  { number: 175, name: "MAESTRI Mirco", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/mirco-maestri", country: "ITA" },
  { number: 176, name: "MUÑOZ Francisco", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/francisco-munoz-llana", country: "ESP" },
  { number: 177, name: "PIETROBON Andrea", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/andrea-pietrobon", country: "ITA" },
  { number: 178, name: "TONELLI Alessandro", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/alessandro-tonelli", country: "ITA" },

  // Team Visma | Lease a Bike
  { number: 181, name: "VAN AERT Wout", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/wout-van-aert", country: "BEL" },
  { number: 182, name: "AFFINI Edoardo", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/edoardo-affini", country: "ITA" },
  { number: 183, name: "KELDERMAN Wilco", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/wilco-kelderman", country: "NED" },
  { number: 184, name: "KOOIJ Olav", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/olav-kooij", country: "NED" },
  { number: 185, name: "KRUIJSWIJK Steven", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/steven-kruijswijk", country: "NED" },
  { number: 186, name: "LEMMEN Bart", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/bart-lemmen", country: "NED" },
  { number: 187, name: "VAN BAARLE Dylan", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/dylan-van-baarle", country: "NED" },
  { number: 188, name: "YATES Simon", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/simon-yates", country: "GBR" },

  // Tudor Pro Cycling Team
  { number: 191, name: "STORER Michael", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/michael-storer", country: "GBR" },
  { number: 192, name: "BRENNER Marco", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/marco-brenner", country: "ITA" },
  { number: 193, name: "KRIEGER Alexander", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/alexander-krieger", country: "GER" },
  { number: 194, name: "PLUIMERS Rick", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/rick-pluimers", country: "BEL" },
  { number: 195, name: "STORK Florian", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/florian-stork", country: "GER" },
  { number: 196, name: "VOISARD Yannis", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/yannis-voisard", country: "FRA" },
  { number: 197, name: "WARBASSE Larry", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/lawrence-warbasse", country: "CAN" },
  { number: 198, name: "ZIJLAARD Maikel", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/maikel-zijlaard", country: "NED" },

  // UAE Team Emirates
  { number: 201, name: "AYUSO Juan", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/juan-ayuso-pesquera", country: "ESP" },
  { number: 202, name: "ARRIETA Igor", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/igor-arrieta-lizarraga", country: "ESP" },
  { number: 203, name: "BARONCINI Filippo", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/filippo-baroncini", country: "ITA" },
  { number: 204, name: "DEL TORO Isaac", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/isaac-del-toro", country: "ESP" },
  { number: 205, name: "MAJKA Rafał", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/rafal-majka", country: "POL" },
  { number: 206, name: "MCNULTY Brandon", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/brandon-mcnulty", country: "GBR" },
  { number: 207, name: "VINE Jay", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/jay-vine", country: "GBR" },
  { number: 208, name: "YATES Adam", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/adam-yates", country: "GBR" },

  // VF Group - Bardiani CSF - Faizanè
  { number: 211, name: "FIORELLI Filippo", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/filippo-fiorelli", country: "ITA" },
  { number: 212, name: "COVILI Luca", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/luca-covili", country: "ITA" },
  { number: 213, name: "MAGLI Filippo", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/filippo-magli2", country: "ITA" },
  { number: 214, name: "MARCELLUSI Martin", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/martin-marcellusi", country: "ITA" },
  { number: 215, name: "MARTINELLI Alessio", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/alessio-martinelli", country: "ITA" },
  { number: 216, name: "PINARELLO Alessandro", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/alessandro-pinarello", country: "ITA" },
  { number: 217, name: "TAROZZI Manuele", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/manuele-tarozzi", country: "ITA" },
  { number: 218, name: "ZANONCELLO Enrico", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/enrico-zanoncello", country: "ITA" },

  // XDS Astana Team
  { number: 221, name: "ULISSI Diego", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/diego-ulissi", country: "ITA" },
  { number: 222, name: "CONCI Nicola", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/nicola-conci", country: "ITA" },
  { number: 223, name: "FORTUNATO Lorenzo", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/lorenzo-fortunato", country: "ITA" },
  { number: 224, name: "KANTER Max", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/max-kanter", country: "GER" },
  { number: 225, name: "KUZMIN Anton", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/anton-kuzmin", country: "RUS" },
  { number: 226, name: "MASNADA Fausto", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/fausto-masnada", country: "ITA" },
  { number: 227, name: "POELS Wout", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/wout-poels", country: "BEL" },
  { number: 228, name: "SCARONI Christian", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/christian-scaroni", country: "ITA" }
]; 