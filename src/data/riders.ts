export interface Rider {
  number: number;
  name: string;
  team: string;
  nationality: string;
  pcsUrl: string;
}

export const riders: Rider[] = [
  // Red Bull - BORA - hansgrohe
  { number: 1, name: "ROGLIČ Primož", team: "Red Bull - BORA - hansgrohe", nationality: "Slovenië", pcsUrl: "https://www.procyclingstats.com/rider/primož-roglic" },
  { number: 2, name: "ALEOTTI Giovanni", team: "Red Bull - BORA - hansgrohe", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/giovanni-aleotti" },
  { number: 3, name: "DENZ Nico", team: "Red Bull - BORA - hansgrohe", nationality: "Duitsland", pcsUrl: "https://www.procyclingstats.com/rider/nico-denz" },
  { number: 4, name: "HINDLEY Jai", team: "Red Bull - BORA - hansgrohe", nationality: "Australië", pcsUrl: "https://www.procyclingstats.com/rider/jai-hindley" },
  { number: 5, name: "MARTÍNEZ Daniel Felipe", team: "Red Bull - BORA - hansgrohe", nationality: "Colombia", pcsUrl: "https://www.procyclingstats.com/rider/daniel-felipe-martinez" },
  { number: 6, name: "MOSCON Gianni", team: "Red Bull - BORA - hansgrohe", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/gianni-moscon" },
  { number: 7, name: "PELLIZZARI Giulio", team: "Red Bull - BORA - hansgrohe", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/giulio-pellizzari" },
  { number: 8, name: "TRATNIK Jan", team: "Red Bull - BORA - hansgrohe", nationality: "Slovenië", pcsUrl: "https://www.procyclingstats.com/rider/jan-tratnik" },

  // Alpecin - Deceuninck
  { number: 11, name: "GROVES Kaden", team: "Alpecin - Deceuninck", nationality: "Australië", pcsUrl: "https://www.procyclingstats.com/rider/kaden-groves" },
  { number: 12, name: "HERMANS Quinten", team: "Alpecin - Deceuninck", nationality: "België", pcsUrl: "https://www.procyclingstats.com/rider/quinten-hermans" },
  { number: 13, name: "HOLLMANN Juri", team: "Alpecin - Deceuninck", nationality: "Duitsland", pcsUrl: "https://www.procyclingstats.com/rider/juri-hollmann" },
  { number: 14, name: "JANSSENS Jimmy", team: "Alpecin - Deceuninck", nationality: "België", pcsUrl: "https://www.procyclingstats.com/rider/jimmy-janssens" },
  { number: 15, name: "KIELICH Timo", team: "Alpecin - Deceuninck", nationality: "België", pcsUrl: "https://www.procyclingstats.com/rider/timo-kielich" },
  { number: 16, name: "PLANCKAERT Edward", team: "Alpecin - Deceuninck", nationality: "België", pcsUrl: "https://www.procyclingstats.com/rider/edward-planckaert" },
  { number: 17, name: "VAN DEN BOSSCHE Fabio", team: "Alpecin - Deceuninck", nationality: "België", pcsUrl: "https://www.procyclingstats.com/rider/fabio-van-den-bossche" },
  { number: 18, name: "PLOWRIGHT Jensen", team: "Alpecin - Deceuninck", nationality: "Australië", pcsUrl: "https://www.procyclingstats.com/rider/jensen-plowright" },

  // Arkéa - B&B Hotels
  { number: 21, name: "VERRE Alessandro", team: "Arkéa - B&B Hotels", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/alessandro-verre" },
  { number: 22, name: "EPIS Giosuè", team: "Arkéa - B&B Hotels", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/giosuè-epis" },
  { number: 23, name: "GUGLIELMI Simon", team: "Arkéa - B&B Hotels", nationality: "Frankrijk", pcsUrl: "https://www.procyclingstats.com/rider/simon-guglielmi" },
  { number: 24, name: "HUYS Laurens", team: "Arkéa - B&B Hotels", nationality: "België", pcsUrl: "https://www.procyclingstats.com/rider/laurens-huys" },
  { number: 25, name: "MOZZATO Luca", team: "Arkéa - B&B Hotels", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/luca-mozzato" },
  { number: 26, name: "RIES Michel", team: "Arkéa - B&B Hotels", nationality: "Luxemburg", pcsUrl: "https://www.procyclingstats.com/rider/michel-ries" },
  { number: 27, name: "SVESTAD-BÅRDSENG Embret", team: "Arkéa - B&B Hotels", nationality: "Noorwegen", pcsUrl: "https://www.procyclingstats.com/rider/embret-svestad-bardseng" },
  { number: 28, name: "TJØTTA Martin", team: "Arkéa - B&B Hotels", nationality: "Noorwegen", pcsUrl: "https://www.procyclingstats.com/rider/martin-tjotta" },

  // Bahrain - Victorious
  { number: 31, name: "TIBERI Antonio", team: "Bahrain - Victorious", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/antonio-tiberi" },
  { number: 32, name: "BILBAO Pello", team: "Bahrain - Victorious", nationality: "Spanje", pcsUrl: "https://www.procyclingstats.com/rider/pello-bilbao" },
  { number: 33, name: "CARUSO Damiano", team: "Bahrain - Victorious", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/damiano-caruso" },
  { number: 34, name: "EULÁLIO Afonso", team: "Bahrain - Victorious", nationality: "Portugal", pcsUrl: "https://www.procyclingstats.com/rider/afonso-eulalio" },
  { number: 35, name: "GOVEKAR Matevž", team: "Bahrain - Victorious", nationality: "Slovenië", pcsUrl: "https://www.procyclingstats.com/rider/matevz-govekar" },
  { number: 36, name: "MIHOLJEVIĆ Fran", team: "Bahrain - Victorious", nationality: "Kroatië", pcsUrl: "https://www.procyclingstats.com/rider/fran-miholjevic" },
  { number: 37, name: "PASQUALON Andrea", team: "Bahrain - Victorious", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/andrea-pasqualon" },
  { number: 38, name: "ZAMBANINI Edoardo", team: "Bahrain - Victorious", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/edoardo-zambanini" },

  // Cofidis
  { number: 41, name: "FRETIN Milan", team: "Cofidis", nationality: "Frankrijk", pcsUrl: "https://www.procyclingstats.com/rider/milan-fretin" },
  { number: 42, name: "DEBEAUMARCHÉ Nicolas", team: "Cofidis", nationality: "Frankrijk", pcsUrl: "https://www.procyclingstats.com/rider/nicolas-debeaumarché" },
  { number: 43, name: "LASTRA Jonathan", team: "Cofidis", nationality: "Spanje", pcsUrl: "https://www.procyclingstats.com/rider/jonathan-lastra" },
  { number: 44, name: "MAAS Jan", team: "Cofidis", nationality: "Nederland", pcsUrl: "https://www.procyclingstats.com/rider/jan-maas" },
  { number: 45, name: "MONIQUET Sylvain", team: "Cofidis", nationality: "België", pcsUrl: "https://www.procyclingstats.com/rider/sylvain-moniquet" },
  { number: 46, name: "OLDANI Stefano", team: "Cofidis", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/stefano-oldani" },
  { number: 47, name: "PEREZ Anthony", team: "Cofidis", nationality: "Frankrijk", pcsUrl: "https://www.procyclingstats.com/rider/anthony-perez" },
  { number: 48, name: "SAMITIER Sergio", team: "Cofidis", nationality: "Spanje", pcsUrl: "https://www.procyclingstats.com/rider/sergio-samitier" },

  // Team Visma | Lease a Bike
  { number: 181, name: "VAN AERT Wout", team: "Team Visma | Lease a Bike", nationality: "België", pcsUrl: "https://www.procyclingstats.com/rider/wout-van-aert" },
  { number: 182, name: "AFFINI Edoardo", team: "Team Visma | Lease a Bike", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/edoardo-affini" },
  { number: 183, name: "KELDERMAN Wilco", team: "Team Visma | Lease a Bike", nationality: "Nederland", pcsUrl: "https://www.procyclingstats.com/rider/wilco-kelderman" },
  { number: 184, name: "KOOIJ Olav", team: "Team Visma | Lease a Bike", nationality: "Nederland", pcsUrl: "https://www.procyclingstats.com/rider/olav-kooij" },
  { number: 185, name: "KRUIJSWIJK Steven", team: "Team Visma | Lease a Bike", nationality: "Nederland", pcsUrl: "https://www.procyclingstats.com/rider/steven-kruijswijk" },
  { number: 186, name: "LEMMEN Bart", team: "Team Visma | Lease a Bike", nationality: "Nederland", pcsUrl: "https://www.procyclingstats.com/rider/bart-lemmen" },
  { number: 187, name: "VAN BAARLE Dylan", team: "Team Visma | Lease a Bike", nationality: "Nederland", pcsUrl: "https://www.procyclingstats.com/rider/dylan-van-baarle" },
  { number: 188, name: "YATES Simon", team: "Team Visma | Lease a Bike", nationality: "Groot-Brittannië", pcsUrl: "https://www.procyclingstats.com/rider/simon-yates" },

  // UAE Team Emirates
  { number: 201, name: "AYUSO Juan", team: "UAE Team Emirates", nationality: "Spanje", pcsUrl: "https://www.procyclingstats.com/rider/juan-ayuso" },
  { number: 202, name: "ARRIETA Igor", team: "UAE Team Emirates", nationality: "Spanje", pcsUrl: "https://www.procyclingstats.com/rider/igor-arrieta" },
  { number: 203, name: "BARONCINI Filippo", team: "UAE Team Emirates", nationality: "Italië", pcsUrl: "https://www.procyclingstats.com/rider/filippo-baroncini" },
  { number: 204, name: "DEL TORO Isaac", team: "UAE Team Emirates", nationality: "Mexico", pcsUrl: "https://www.procyclingstats.com/rider/isaac-del-toro" },
  { number: 205, name: "MAJKA Rafał", team: "UAE Team Emirates", nationality: "Polen", pcsUrl: "https://www.procyclingstats.com/rider/rafal-majka" },
  { number: 206, name: "MCNULTY Brandon", team: "UAE Team Emirates", nationality: "Verenigde Staten", pcsUrl: "https://www.procyclingstats.com/rider/brandon-mcnulty" },
  { number: 207, name: "VINE Jay", team: "UAE Team Emirates", nationality: "Australië", pcsUrl: "https://www.procyclingstats.com/rider/jay-vine" },
  { number: 208, name: "YATES Adam", team: "UAE Team Emirates", nationality: "Groot-Brittannië", pcsUrl: "https://www.procyclingstats.com/rider/adam-yates" }
]; 