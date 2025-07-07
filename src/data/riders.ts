export interface Rider {
  number: number;
  name: string;
  team: string;
  pcsUrl: string;
}

export const riders: Rider[] = [
  // Red Bull - BORA - hansgrohe
  { number: 1, name: "ROGLIČ Primož", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/primoz-roglic" },
  { number: 2, name: "ALEOTTI Giovanni", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/giovanni-aleotti" },
  { number: 3, name: "DENZ Nico", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/nico-denz" },
  { number: 4, name: "HINDLEY Jai", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/jai-hindley" },
  { number: 5, name: "MARTÍNEZ Daniel Felipe", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/daniel-felipe-martinez" },
  { number: 6, name: "MOSCON Gianni", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/gianni-moscon" },
  { number: 7, name: "PELLIZZARI Giulio", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/giulio-pellizzari" },
  { number: 8, name: "TRATNIK Jan", team: "Red Bull - BORA - hansgrohe", pcsUrl: "https://www.procyclingstats.com/rider/jan-tratnik" },

  // Alpecin - Deceuninck
  { number: 11, name: "GROVES Kaden", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/kaden-groves" },
  { number: 12, name: "HERMANS Quinten", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/quinten-hermans" },
  { number: 13, name: "HOLLMANN Juri", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/juri-hollmann" },
  { number: 14, name: "JANSSENS Jimmy", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/jimmy-janssens" },
  { number: 15, name: "KIELICH Timo", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/timo-kielich" },
  { number: 16, name: "PLANCKAERT Edward", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/edward-planckaert" },
  { number: 17, name: "VAN DEN BOSSCHE Fabio", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/fabio-van-den-bossche" },
  { number: 18, name: "PLOWRIGHT Jensen", team: "Alpecin - Deceuninck", pcsUrl: "https://www.procyclingstats.com/rider/jensen-plowright" },

  // Arkéa - B&B Hotels
  { number: 21, name: "VERRE Alessandro", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/alessandro-verre" },
  { number: 22, name: "EPIS Giosuè", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/giosue-epis" },
  { number: 23, name: "GUGLIELMI Simon", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/simon-guglielmi" },
  { number: 24, name: "HUYS Laurens", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/laurens-huys" },
  { number: 25, name: "MOZZATO Luca", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/luca-mozzato" },
  { number: 26, name: "RIES Michel", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/michel-ries" },
  { number: 27, name: "SVESTAD-BÅRDSENG Embret", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/embret-svestad-bardseng" },
  { number: 28, name: "TJØTTA Martin", team: "Arkéa - B&B Hotels", pcsUrl: "https://www.procyclingstats.com/rider/martin-tjotta" },

  // Bahrain - Victorious
  { number: 31, name: "TIBERI Antonio", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/antonio-tiberi" },
  { number: 32, name: "BILBAO Pello", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/pello-bilbao" },
  { number: 33, name: "CARUSO Damiano", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/damiano-caruso" },
  { number: 34, name: "EULÁLIO Afonso", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/afonso-eulalio" },
  { number: 35, name: "GOVEKAR Matevž", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/matevz-govekar" },
  { number: 36, name: "MIHOLJEVIĆ Fran", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/fran-miholjevic" },
  { number: 37, name: "PASQUALON Andrea", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/andrea-pasqualon" },
  { number: 38, name: "ZAMBANINI Edoardo", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/edoardo-zambanini" },

  // Cofidis
  { number: 41, name: "FRETIN Milan", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/milan-fretin" },
  { number: 42, name: "DEBEAUMARCHÉ Nicolas", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/nicolas-debeaumarche" },
  { number: 43, name: "LASTRA Jonathan", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/jonathan-lastra" },
  { number: 44, name: "MAAS Jan", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/jan-maas" },
  { number: 45, name: "MONIQUET Sylvain", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/sylvain-moniquet" },
  { number: 46, name: "OLDANI Stefano", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/stefano-oldani" },
  { number: 47, name: "PEREZ Anthony", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/anthony-perez" },
  { number: 48, name: "SAMITIER Sergio", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/sergio-samitier" },

  // Decathlon AG2R La Mondiale Team
  { number: 51, name: "BENNETT Sam", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/sam-bennett" },
  { number: 52, name: "BOUCHARD Geoffrey", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/geoffrey-bouchard" },
  { number: 53, name: "DE BONDT Dries", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/dries-de-bondt" },
  { number: 54, name: "DEWULF Stan", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/stan-dewulf" },
  { number: 55, name: "GODON Dorian", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/dorian-godon" },
  { number: 56, name: "GUDMESTAD Tord", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/tord-gudmestad" },
  { number: 57, name: "PRODHOMME Nicolas", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/nicolas-prodhomme" },
  { number: 58, name: "VENDRAME Andrea", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/andrea-vendrame" },

  // EF Education - EasyPost
  { number: 61, name: "CARAPAZ Richard", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/richard-carapaz" },
  { number: 62, name: "ASGREEN Kasper", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/kasper-asgreen" },
  { number: 63, name: "CEPEDA Jefferson Alexander", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/jefferson-alexander-cepeda" },
  { number: 64, name: "DOULL Owain", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/owain-doull" },
  { number: 65, name: "HONORÉ Mikkel Frølich", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/mikkel-honore" },
  { number: 66, name: "RAFFERTY Darren", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/darren-rafferty" },
  { number: 67, name: "SHAW James", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/james-shaw" },
  { number: 68, name: "STEINHAUSER Georg", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/georg-steinhauser" },

  // Groupama - FDJ
  { number: 71, name: "GAUDU David", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/david-gaudu" },
  { number: 72, name: "BYSTRØM Sven Erik", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/sven-erik-bystrom" },
  { number: 73, name: "DAVY Clément", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/clement-davy" },
  { number: 74, name: "GENIETS Kevin", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/kevin-geniets" },
  { number: 75, name: "GERMANI Lorenzo", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/lorenzo-germani" },
  { number: 76, name: "PACHER Quentin", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/quentin-pacher" },
  { number: 77, name: "PALENI Enzo", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/enzo-paleni" },
  { number: 78, name: "ROCHAS Rémy", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/remy-rochas" },

  // INEOS Grenadiers
  { number: 81, name: "BERNAL Egan", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/egan-bernal" },
  { number: 82, name: "ARENSMAN Thymen", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/thymen-arensman" },
  { number: 83, name: "CASTROVIEJO Jonathan", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/jonathan-castroviejo" },
  { number: 84, name: "HAMILTON Lucas", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/lucas-hamilton" },
  { number: 85, name: "HEIDUK Kim", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/kim-heiduk" },
  { number: 86, name: "RIVERA Brandon Smith", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/brandon-smith-rivera-vargas" },
  { number: 87, name: "TARLING Joshua", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/joshua-tarling" },
  { number: 88, name: "TURNER Ben", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/ben-turner" },

  // Intermarché - Wanty
  { number: 91, name: "MEINTJES Louis", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/louis-meintjes" },
  { number: 92, name: "BUSATTO Francesco", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/francesco-busatto" },
  { number: 93, name: "COLLEONI Kevin", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/kevin-colleoni" },
  { number: 94, name: "PETILLI Simone", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/simone-petilli" },
  { number: 95, name: "SMITH Dion", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/dion-smith" },
  { number: 96, name: "THIJSSEN Gerben", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/gerben-thijssen" },
  { number: 97, name: "VAN DER HOORN Taco", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/taco-van-der-hoorn" },
  { number: 98, name: "VAN HOECKE Gijs", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/gijs-van-hoecke" },

  // Israel - Premier Tech
  { number: 101, name: "GEE Derek", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/derek-gee" },
  { number: 102, name: "CLARKE Simon", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/simon-clarke" },
  { number: 103, name: "FRIGO Marco", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/marco-frigo" },
  { number: 104, name: "FUGLSANG Jakob", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/jakob-fuglsang" },
  { number: 105, name: "HIRT Jan", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/jan-hirt" },
  { number: 106, name: "HOULE Hugo", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/hugo-houle" },
  { number: 107, name: "SCHULTZ Nick", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/nick-schultz" },
  { number: 109, name: "STRONG Corbin", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/corbin-strong" },

  // Lidl - Trek
  { number: 111, name: "CICCONE Giulio", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/giulio-ciccone" },
  { number: 112, name: "HOOLE Daan", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/daan-hoole" },
  { number: 113, name: "KONRAD Patrick", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/patrick-konrad" },
  { number: 114, name: "KRAGH ANDERSEN Søren", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/soren-kragh-andersen" },
  { number: 115, name: "MOSCA Jacopo", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/jacopo-mosca" },
  { number: 116, name: "PEDERSEN Mads", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/mads-pedersen" },
  { number: 117, name: "VACEK Mathias", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/mathias-vacek" },
  { number: 118, name: "VERONA Carlos", team: "Lidl - Trek", pcsUrl: "https://www.procyclingstats.com/rider/carlos-verona" },

  // Movistar Team
  { number: 121, name: "QUINTANA Nairo", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/nairo-quintana" },
  { number: 122, name: "AULAR Orluis", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/orluis-aular" },
  { number: 123, name: "BARRENETXEA Jon", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/jon-barrenetxea-golzarri" },
  { number: 124, name: "CEPEDA Jefferson Alveiro", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/jefferson-cepeda-hernandez" },
  { number: 125, name: "FORMOLO Davide", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/davide-formolo" },
  { number: 126, name: "MILESI Lorenzo", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/lorenzo-milesi" },
  { number: 127, name: "RUBIO Einer", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/einer-rubio" },
  { number: 128, name: "TORRES Albert", team: "Movistar Team", pcsUrl: "https://www.procyclingstats.com/rider/albert-torres" },

  // Q36.5 Pro Cycling Team
  { number: 131, name: "PIDCOCK Thomas", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/thomas-pidcock" },
  { number: 132, name: "AZPARREN Xabier Mikel", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/xabier-mikel-azparren-irurzun" },
  { number: 133, name: "DONOVAN Mark", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/mark-donovan" },
  { number: 134, name: "HOWSON Damien", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/damien-howson" },
  { number: 135, name: "LIEPIŅŠ Emīls", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/emils-liepins" },
  { number: 136, name: "MOSCHETTI Matteo", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/matteo-moschetti" },
  { number: 137, name: "VADER Milan", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/milan-vader" },
  { number: 138, name: "ZUKOWSKY Nickolas", team: "Q36.5 Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/nickolas-zukowsky" },

  // Soudal Quick-Step
  { number: 141, name: "LANDA Mikel", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/mikel-landa" },
  { number: 142, name: "CATTANEO Mattia", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/mattia-cattaneo" },
  { number: 143, name: "ČERNÝ Josef", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/josef-cerny" },
  { number: 144, name: "GAROFOLI Gianmarco", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/gianmarco-garofoli" },
  { number: 145, name: "HAYTER Ethan", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/ethan-hayter" },
  { number: 146, name: "KNOX James", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/james-knox" },
  { number: 147, name: "LAMPERTI Luke", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/luke-lamperti" },
  { number: 148, name: "MAGNIER Paul", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/paul-magnier" },

  // Team Jayco AlUla
  { number: 151, name: "HARPER Chris", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/chris-harper" },
  { number: 152, name: "BOUWMAN Koen", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/koen-bouwman" },
  { number: 153, name: "DE PRETTO Davide", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/davide-de-pretto" },
  { number: 154, name: "DOUBLE Paul", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/paul-double" },
  { number: 155, name: "ENGELHARDT Felix", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/felix-engelhardt" },
  { number: 156, name: "HEPBURN Michael", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/michael-hepburn" },
  { number: 157, name: "PLAPP Luke", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/luke-plapp" },
  { number: 158, name: "ZANA Filippo", team: "Team Jayco AlUla", pcsUrl: "https://www.procyclingstats.com/rider/filippo-zana" },

  // Team Picnic PostNL
  { number: 161, name: "BARDET Romain", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/romain-bardet" },
  { number: 162, name: "EDMONDSON Alex", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/alexander-edmondson" },
  { number: 163, name: "HAMILTON Chris", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/chris-hamilton" },
  { number: 164, name: "LEEMREIZE Gijs", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/gijs-leemreize" },
  { number: 165, name: "MÄRKL Niklas", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/niklas-markl" },
  { number: 166, name: "POOLE Max", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/max-poole" },
  { number: 167, name: "VAN UDEN Casper", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/casper-van-uden" },
  { number: 168, name: "WELTEN Bram", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/bram-welten" },

  // Team Polti VisitMalta
  { number: 171, name: "PIGANZOLI Davide", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/davide-piganzoli" },
  { number: 172, name: "BAIS Davide", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/davide-bais" },
  { number: 173, name: "BAIS Mattia", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/mattia-bais" },
  { number: 174, name: "LONARDI Giovanni", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/giovanni-lonardi" },
  { number: 175, name: "MAESTRI Mirco", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/mirco-maestri" },
  { number: 176, name: "MUÑOZ Francisco", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/francisco-munoz-llana" },
  { number: 177, name: "PIETROBON Andrea", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/andrea-pietrobon" },
  { number: 178, name: "TONELLI Alessandro", team: "Team Polti VisitMalta", pcsUrl: "https://www.procyclingstats.com/rider/alessandro-tonelli" },

  // Team Visma | Lease a Bike
  { number: 181, name: "VAN AERT Wout", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/wout-van-aert" },
  { number: 182, name: "AFFINI Edoardo", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/edoardo-affini" },
  { number: 183, name: "KELDERMAN Wilco", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/wilco-kelderman" },
  { number: 184, name: "KOOIJ Olav", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/olav-kooij" },
  { number: 185, name: "KRUIJSWIJK Steven", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/steven-kruijswijk" },
  { number: 186, name: "LEMMEN Bart", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/bart-lemmen" },
  { number: 187, name: "VAN BAARLE Dylan", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/dylan-van-baarle" },
  { number: 188, name: "YATES Simon", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/simon-yates" },

  // Tudor Pro Cycling Team
  { number: 191, name: "STORER Michael", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/michael-storer" },
  { number: 192, name: "BRENNER Marco", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/marco-brenner" },
  { number: 193, name: "KRIEGER Alexander", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/alexander-krieger" },
  { number: 194, name: "PLUIMERS Rick", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/rick-pluimers" },
  { number: 195, name: "STORK Florian", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/florian-stork" },
  { number: 196, name: "VOISARD Yannis", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/yannis-voisard" },
  { number: 197, name: "WARBASSE Larry", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/lawrence-warbasse" },
  { number: 198, name: "ZIJLAARD Maikel", team: "Tudor Pro Cycling Team", pcsUrl: "https://www.procyclingstats.com/rider/maikel-zijlaard" },

  // UAE Team Emirates
  { number: 201, name: "AYUSO Juan", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/juan-ayuso-pesquera" },
  { number: 202, name: "ARRIETA Igor", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/igor-arrieta-lizarraga" },
  { number: 203, name: "BARONCINI Filippo", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/filippo-baroncini" },
  { number: 204, name: "DEL TORO Isaac", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/isaac-del-toro" },
  { number: 205, name: "MAJKA Rafał", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/rafal-majka" },
  { number: 206, name: "MCNULTY Brandon", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/brandon-mcnulty" },
  { number: 207, name: "VINE Jay", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/jay-vine" },
  { number: 208, name: "YATES Adam", team: "UAE Team Emirates", pcsUrl: "https://www.procyclingstats.com/rider/adam-yates" },

  // VF Group - Bardiani CSF - Faizanè
  { number: 211, name: "FIORELLI Filippo", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/filippo-fiorelli" },
  { number: 212, name: "COVILI Luca", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/luca-covili" },
  { number: 213, name: "MAGLI Filippo", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/filippo-magli2" },
  { number: 214, name: "MARCELLUSI Martin", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/martin-marcellusi" },
  { number: 215, name: "MARTINELLI Alessio", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/alessio-martinelli" },
  { number: 216, name: "PINARELLO Alessandro", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/alessandro-pinarello" },
  { number: 217, name: "TAROZZI Manuele", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/manuele-tarozzi" },
  { number: 218, name: "ZANONCELLO Enrico", team: "VF Group - Bardiani CSF - Faizanè", pcsUrl: "https://www.procyclingstats.com/rider/enrico-zanoncello" },

  // XDS Astana Team
  { number: 221, name: "ULISSI Diego", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/diego-ulissi" },
  { number: 222, name: "CONCI Nicola", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/nicola-conci" },
  { number: 223, name: "FORTUNATO Lorenzo", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/lorenzo-fortunato" },
  { number: 224, name: "KANTER Max", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/max-kanter" },
  { number: 225, name: "KUZMIN Anton", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/anton-kuzmin" },
  { number: 226, name: "MASNADA Fausto", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/fausto-masnada" },
  { number: 227, name: "POELS Wout", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/wout-poels" },
  { number: 228, name: "SCARONI Christian", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/christian-scaroni" }
]; 