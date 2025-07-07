export interface Rider {
  number: number;
  name: string;
  team: string;
  pcsUrl: string;
  country: string; // ISO landcode, bijv. 'SLO', 'ITA', 'GER'
}

export const riders: Rider[] = [
  // UAE Team Emirates - XRG (WT)
  // DS: PEDRAZZINI Simone, MARCATO Marco
  { number: 1, name: "POGAČAR Tadej", team: "UAE Team Emirates - XRG", pcsUrl: "https://www.procyclingstats.com/rider/tadej-pogacar", country: "SLO" },
  { number: 2, name: "ALMEIDA João", team: "UAE Team Emirates - XRG", pcsUrl: "https://www.procyclingstats.com/rider/joao-almeida", country: "POR" },
  { number: 3, name: "NARVÁEZ Jhonatan", team: "UAE Team Emirates - XRG", pcsUrl: "https://www.procyclingstats.com/rider/jhonatan-narvaez", country: "ECU" },
  { number: 4, name: "POLITT Nils", team: "UAE Team Emirates - XRG", pcsUrl: "https://www.procyclingstats.com/rider/nils-politt", country: "GER" },
  { number: 5, name: "SIVAKOV Pavel", team: "UAE Team Emirates - XRG", pcsUrl: "https://www.procyclingstats.com/rider/pavel-sivakov", country: "FRA" },
  { number: 6, name: "SOLER Marc", team: "UAE Team Emirates - XRG", pcsUrl: "https://www.procyclingstats.com/rider/marc-soler", country: "ESP" },
  { number: 7, name: "WELLENS Tim", team: "UAE Team Emirates - XRG", pcsUrl: "https://www.procyclingstats.com/rider/tim-wellens", country: "BEL" },
  { number: 8, name: "YATES Adam", team: "UAE Team Emirates - XRG", pcsUrl: "https://www.procyclingstats.com/rider/adam-yates", country: "GBR" },

  // Team Visma | Lease a Bike (WT)
  // DS: MAASSEN Frans, VAN DONGEN Arthur
  { number: 11, name: "VINGEGAARD Jonas", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/jonas-vingegaard", country: "DEN" },
  { number: 12, name: "AFFINI Edoardo", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/edoardo-affini", country: "ITA" },
  { number: 13, name: "BENOOT Tiesj", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/tiesj-benoot", country: "BEL" },
  { number: 14, name: "CAMPENAERTS Victor", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/victor-campenaerts", country: "BEL" },
  { number: 15, name: "JORGENSON Matteo", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/matteo-jorgenson", country: "USA" },
  { number: 16, name: "KUSS Sepp", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/sepp-kuss", country: "USA" },
  { number: 17, name: "VAN AERT Wout", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/wout-van-aert", country: "BEL" },
  { number: 18, name: "YATES Simon", team: "Team Visma | Lease a Bike", pcsUrl: "https://www.procyclingstats.com/rider/simon-yates", country: "GBR" },

  // Soudal Quick-Step (WT)
  // DS: LODEWYCK Klaas, STEELS Tom
  { number: 21, name: "EVENEPOEL Remco", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/remco-evenepoel", country: "BEL" },
  { number: 22, name: "CATTANEO Mattia", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/mattia-cattaneo", country: "ITA" },
  { number: 23, name: "EENKHOORN Pascal", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/pascal-eenkhoorn", country: "NED" },
  { number: 24, name: "MERLIER Tim", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/tim-merlier", country: "BEL" },
  { number: 25, name: "PARET-PEINTRE Valentin", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/valentin-paret-peintre", country: "FRA" },
  { number: 26, name: "SCHACHMANN Maximilian", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/maximilian-schachmann", country: "GER" },
  { number: 27, name: "VAN LERBERGHE Bert", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/bert-van-lerberghe", country: "BEL" },
  { number: 28, name: "VAN WILDER Ilan ", team: "Soudal Quick-Step", pcsUrl: "https://www.procyclingstats.com/rider/ilan-van-wilder", country: "BEL" },

  // EF Education - EasyPost (WT)
  // DS: WEGELIUS Charles, KLIER Andreas
  { number: 31, name: "HEALY Ben", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/ben-healy", country: "IRL" },
  { number: 32, name: "ALBANESE Vincenzo", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/vincenzo-albanese", country: "ITA" },
  { number: 33, name: "ASGREEN Kasper", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/kasper-asgreen", country: "DEN" },
  { number: 34, name: "BAUDIN Alex", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/alex-baudin", country: "FRA" },
  { number: 35, name: "POWLESS Neilson", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/neilson-powless", country: "USA" },
  { number: 36, name: "SWEENY Harry", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/harry-sweeny", country: "AUS" },
  { number: 37, name: "VALGREN Michael", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/michael-valgren-andersen", country: "DEN" },
  { number: 38, name: "VAN DEN BERG Marijn", team: "EF Education - EasyPost", pcsUrl: "https://www.procyclingstats.com/rider/marijn-van-den-berg", country: "NED" },

  // Intermarché - Wanty (WT)
  // DS: VISBEEK Aike, VANSPEYBROUCK Pieter
  { number: 41, name: "GIRMAY Biniam", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/biniam-girmay", country: "ERI" },
  { number: 42, name: "BARRÉ Louis", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/louis-barre", country: "FRA" },
  { number: 43, name: "BRAET Vito", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/vito-braet", country: "BEL" },
  { number: 44, name: "PAGE Hugo", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/hugo-page", country: "FRA" },
  { number: 45, name: "REX Laurenz", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/laurenz-rex", country: "BEL" },
  { number: 46, name: "RUTSCH Jonas", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/jonas-rutsch", country: "GER" },
  { number: 47, name: "VAN SINTMAARTENSDIJK Roel", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/roel-van-sintmaartensdijk", country: "NED" },
  { number: 48, name: "ZIMMERMANN Georg", team: "Intermarché - Wanty", pcsUrl: "https://www.procyclingstats.com/rider/georg-zimmermann", country: "GER" },

  // Bahrain - Victorious (WT)
  // DS: KREUZIGER Roman, MIHOLJEVIĆ Vladimir
  { number: 51, name: "BUITRAGO Santiago", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/santiago-buitrago-sanchez", country: "COL" },
  { number: 52, name: "BAUHAUS Phil", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/phil-bauhaus", country: "GER" },
  { number: 53, name: "GRADEK Kamil", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/kamil-gradek", country: "POL" },
  { number: 54, name: "HAIG Jack", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/jack-haig", country: "AUS" },
  { number: 55, name: "MARTINEZ Lenny", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/lenny-martinez", country: "FRA" },
  { number: 56, name: "MOHORIČ Matej", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/matej-mohoric", country: "SLO" },
  { number: 57, name: "STANNARD Robert", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/robert-stannard", country: "AUS" },
  { number: 58, name: "WRIGHT Fred", team: "Bahrain - Victorious", pcsUrl: "https://www.procyclingstats.com/rider/alfred-wright", country: "GBR" },

  // INEOS Grenadiers (WT)
  // DS: ARVESEN Kurt-Asle, DEMPSTER Zak
  { number: 61, name: "THOMAS Geraint", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/geraint-thomas", country: "GBR" },
  { number: 62, name: "ARENSMAN Thymen", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/thymen-arensman", country: "NED" },
  { number: 63, name: "FOSS Tobias", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/tobias-foss", country: "NOR" },
  { number: 64, name: "BARTA Will", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/will-barta", country: "USA" },
  { number: 65, name: "CASTRILLO Pablo", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/pablo-castrillo", country: "ESP" },
  { number: 66, name: "OLIVEIRA Nelson", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/nelson-oliveira", country: "POR" },
  { number: 67, name: "GARCÍA CORTINA Iván", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/ivan-garcia-cortina", country: "ESP" },
  { number: 68, name: "MÜHLBERGER Gregor", team: "INEOS Grenadiers", pcsUrl: "https://www.procyclingstats.com/rider/gregor-muhlberger", country: "AUT" },

  // Groupama - FDJ (WT)
  // DS: GOUBERT Stéphane, VAUGRENARD Benoît
  { number: 71, name: "MARTIN Guillaume", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/guillaume-martin", country: "FRA" },
  { number: 72, name: "ASKEY Lewis", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/lewis-askey", country: "GBR" },
  { number: 73, name: "BARTHE Cyril", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/cyril-barthe", country: "FRA" },
  { number: 74, name: "GRÉGOIRE Romain", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/romain-gregoire1", country: "FRA" },
  { number: 75, name: "MADOUAS Valentin", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/valentin-madouas", country: "FRA" },
  { number: 76, name: "PACHER Quentin", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/quentin-pacher", country: "FRA" },
  { number: 77, name: "PENHOËT Paul", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/paul-penhoet", country: "FRA" },
  { number: 78, name: "RUSSO Clément", team: "Groupama - FDJ", pcsUrl: "https://www.procyclingstats.com/rider/clement-russo", country: "FRA" },

  // Decathlon AG2R La Mondiale Team (WT)
  // DS: DESSEL Cyril, JOLY Sébastien
  { number: 151, name: "GALL Felix", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/felix-gall", country: "AUT" },
  { number: 152, name: "ARMIRAIL Bruno", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/bruno-armirail", country: "FRA" },
  { number: 153, name: "BERTHET Clément", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/clement-berthet", country: "FRA" },
  { number: 154, name: "BISSEGGER Stefan", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/stefan-bissegger", country: "SUI" },
  { number: 155, name: "NAESEN Oliver", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/oliver-naesen", country: "BEL" },
  { number: 156, name: "PARET-PEINTRE Aurélien", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/aurelien-paret-peintre", country: "FRA" },
  { number: 157, name: "SCOTSON Callum", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/callum-scotson", country: "AUS" },
  { number: 158, name: "TRONCHON Bastien", team: "Decathlon AG2R La Mondiale Team", pcsUrl: "https://www.procyclingstats.com/rider/bastien-tronchon", country: "FRA" },

  // Cofidis (WT)
  // DS: MARICHAL Thierry, GERRIKAGOITIA Gorka
  { number: 161, name: "BUCHMANN Emanuel", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/emanuel-buchmann", country: "GER" },
  { number: 162, name: "ARANBURU Alex", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/alex-aranburu", country: "ESP" },
  { number: 163, name: "COQUARD Bryan", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/bryan-coquard", country: "FRA" },
  { number: 164, name: "IZAGIRRE Ion", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/ion-izagirre", country: "ESP" },
  { number: 165, name: "RENARD Alexis", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/alexis-renard", country: "FRA" },
  { number: 166, name: "TEUNS Dylan", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/dylan-teuns", country: "BEL" },
  { number: 167, name: "THOMAS Benjamin", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/benjamin-thomas-2", country: "FRA" },
  { number: 168, name: "TOUZÉ Damien", team: "Cofidis", pcsUrl: "https://www.procyclingstats.com/rider/damien-touze", country: "FRA" },

  // XDS Astana Team (WT)
  // DS: FOFONOV Dmitriy, RENSHAW Mark
  { number: 171, name: "TEJADA Harold", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/harold-tejada", country: "COL" },
  { number: 172, name: "BALLERINI Davide", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/davide-ballerini", country: "ITA" },
  { number: 173, name: "BOL Cees", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/cees-bol", country: "NED" },
  { number: 174, name: "CHAMPOUSSIN Clément", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/clement-champoussin", country: "FRA" },
  { number: 175, name: "FEDOROV Yevgeniy", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/yevgeniy-fedorov", country: "KAZ" },
  { number: 176, name: "HIGUITA Sergio", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/sergio-higuita", country: "COL" },
  { number: 177, name: "TEUNISSEN Mike", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/mike-teunissen", country: "NED" },
  { number: 178, name: "VELASCO Simone", team: "XDS Astana Team", pcsUrl: "https://www.procyclingstats.com/rider/simone-velasco", country: "ITA" },

  // Team TotalEnergies (PRT)
  // DS: SICARD Romain, LEBRETON Lylian
  { number: 181, name: "CRAS Steff", team: "Team TotalEnergies", pcsUrl: "https://www.procyclingstats.com/rider/steff-cras", country: "BEL" },
  { number: 182, name: "BURGAUDEAU Mathieu", team: "Team TotalEnergies", pcsUrl: "https://www.procyclingstats.com/rider/mathieu-burgaudeau", country: "FRA" },
  { number: 183, name: "DELETTRE Alexandre", team: "Team TotalEnergies", pcsUrl: "https://www.procyclingstats.com/rider/alexandre-delettre", country: "FRA" },
  { number: 184, name: "GACHIGNARD Thomas", team: "Team TotalEnergies", pcsUrl: "https://www.procyclingstats.com/rider/thomas-gachignard", country: "FRA" },
  { number: 185, name: "JEANNIÈRE Emilien", team: "Team TotalEnergies", pcsUrl: "https://www.procyclingstats.com/rider/emilien-jeanniere", country: "FRA" },
  { number: 186, name: "JEGAT Jordan", team: "Team TotalEnergies", pcsUrl: "https://www.procyclingstats.com/rider/jordan-jegat", country: "FRA" },
  { number: 187, name: "TURGIS Anthony", team: "Team TotalEnergies", pcsUrl: "https://www.procyclingstats.com/rider/anthony-turgis", country: "FRA" },
  { number: 188, name: "VERCHER Mattéo", team: "Team TotalEnergies", pcsUrl: "https://www.procyclingstats.com/rider/matheo-vercher", country: "FRA" },

  // Team Picnic PostNL (WT)
  // DS: LIGTHART Pim, GUIBERTEAU Christian
  { number: 191, name: "ONLEY Oscar", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/oscar-onley", country: "GBR" },
  { number: 192, name: "BARGUIL Warren", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/warren-barguil", country: "FRA" },
  { number: 193, name: "BITTNER Pavel", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/pavel-bittner", country: "CZE" },
  { number: 194, name: "FLYNN Sean", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/sean-flynn", country: "GBR" },
  { number: 195, name: "ANDRESEN Tobias Lund", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/tobias-lund-andresen", country: "DEN" },
  { number: 196, name: "MÄRKL Niklas", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/niklas-markl", country: "GER" },
  { number: 197, name: "NABERMAN Tim", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/tim-naberman", country: "NED" },
  { number: 198, name: "VAN DEN BROEK Frank", team: "Team Picnic PostNL", pcsUrl: "https://www.procyclingstats.com/rider/frank-van-den-broek", country: "NED" },

  // Israel - Premier Tech (PRT)
  // DS: BAUER Steve, PEKATCH Dror
  { number: 201, name: "WOODS Michael", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/michael-woods", country: "CAN" },
  { number: 202, name: "ACKERMANN Pascal", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/pascal-ackermann", country: "GER" },
  { number: 203, name: "BLACKMORE Joseph", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/joseph-blackmore", country: "GBR" },
  { number: 204, name: "BOIVIN Guillaume", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/guillaume-boivin", country: "CAN" },
  { number: 205, name: "LOUVEL Matis", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/matis-louvel", country: "FRA" },
  { number: 206, name: "LUTSENKO Alexey", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/alexey-lutsenko", country: "KAZ" },
  { number: 207, name: "NEILANDS Krists", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/krists-neilands", country: "LAT" },
  { number: 208, name: "STEWART Jake", team: "Israel - Premier Tech", pcsUrl: "https://www.procyclingstats.com/rider/jake-stewart", country: "GBR" },

  // Lotto (PRT)
  // DS: AERTS Mario, GALLOPIN Tony
  { number: 211, name: "DE LIE Arnaud", team: "Lotto", pcsUrl: "https://www.procyclingstats.com/rider/arnaud-de-lie", country: "BEL" },
  { number: 212, name: "BERCKMOES Jenno", team: "Lotto", pcsUrl: "https://www.procyclingstats.com/rider/jenno-berckmoes", country: "BEL" },
  { number: 213, name: "DE BUYST Jasper", team: "Lotto", pcsUrl: "https://www.procyclingstats.com/rider/jasper-de-buyst", country: "BEL" },
  { number: 214, name: "DRIZNERS Jarrad", team: "Lotto", pcsUrl: "https://www.procyclingstats.com/rider/jarrad-drizners", country: "AUS" },
  { number: 215, name: "GRIGNARD Sébastien", team: "Lotto", pcsUrl: "https://www.procyclingstats.com/rider/sebastien-grignard", country: "BEL" },
  { number: 216, name: "SEPÚLVEDA Eduardo", team: "Lotto", pcsUrl: "https://www.procyclingstats.com/rider/eduardo-sepulveda", country: "ARG" },
  { number: 217, name: "VAN EETVELT Lennert", team: "Lotto", pcsUrl: "https://www.procyclingstats.com/rider/lennert-van-eetvelt", country: "BEL" },
  { number: 218, name: "VAN MOER Brent", team: "Lotto", pcsUrl: "https://www.procyclingstats.com/rider/brent-van-moer", country: "BEL" },

  // Uno-X Mobility (PRT)
  // DS: RASCH Gabriel, KRISTIANSEN Stig
  { number: 221, name: "JOHANNESSEN Tobias Halland", team: "Uno-X Mobility", pcsUrl: "https://www.procyclingstats.com/rider/tobias-halland-johannessen", country: "NOR" },
  { number: 222, name: "ABRAHAMSEN Jonas", team: "Uno-X Mobility", pcsUrl: "https://www.procyclingstats.com/rider/jonas-abrahamsen", country: "NOR" },
  { number: 223, name: "CORT Magnus", team: "Uno-X Mobility", pcsUrl: "https://www.procyclingstats.com/rider/magnus-cort-nielsen", country: "DEN" },
  { number: 224, name: "FREDHEIM Stian", team: "Uno-X Mobility", pcsUrl: "https://www.procyclingstats.com/rider/stian-fredheim", country: "NOR" },
  { number: 225, name: "HOELGAARD Markus", team: "Uno-X Mobility", pcsUrl: "https://www.procyclingstats.com/rider/markus-hoelgaard", country: "NOR" },
  { number: 226, name: "JOHANNESSEN Anders Halland", team: "Uno-X Mobility", pcsUrl: "https://www.procyclingstats.com/rider/anders-halland-johannessen", country: "NOR" },
  { number: 227, name: "LEKNESSUND Andreas", team: "Uno-X Mobility", pcsUrl: "https://www.procyclingstats.com/rider/andreas-leknessund", country: "NOR" },
  { number: 228, name: "WÆRENSKJOLD Søren", team: "Uno-X Mobility", pcsUrl: "https://www.procyclingstats.com/rider/soren-waerenskjold", country: "NOR" },
]; 