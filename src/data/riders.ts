export interface Rider {
  number: number;
  name: string;
  team: string;
  nationality: string;
}

export const riders: Rider[] = [
  // Red Bull - BORA - hansgrohe
  { number: 1, name: "ROGLIČ Primož", team: "Red Bull - BORA - hansgrohe", nationality: "Slovenië" },
  { number: 2, name: "ALEOTTI Giovanni", team: "Red Bull - BORA - hansgrohe", nationality: "Italië" },
  { number: 3, name: "DENZ Nico", team: "Red Bull - BORA - hansgrohe", nationality: "Duitsland" },
  { number: 4, name: "HINDLEY Jai", team: "Red Bull - BORA - hansgrohe", nationality: "Australië" },
  { number: 5, name: "MARTÍNEZ Daniel Felipe", team: "Red Bull - BORA - hansgrohe", nationality: "Colombia" },
  { number: 6, name: "MOSCON Gianni", team: "Red Bull - BORA - hansgrohe", nationality: "Italië" },
  { number: 7, name: "PELLIZZARI Giulio", team: "Red Bull - BORA - hansgrohe", nationality: "Italië" },
  { number: 8, name: "TRATNIK Jan", team: "Red Bull - BORA - hansgrohe", nationality: "Slovenië" },

  // Alpecin - Deceuninck
  { number: 11, name: "GROVES Kaden", team: "Alpecin - Deceuninck", nationality: "Australië" },
  { number: 12, name: "HERMANS Quinten", team: "Alpecin - Deceuninck", nationality: "België" },
  { number: 13, name: "HOLLMANN Juri", team: "Alpecin - Deceuninck", nationality: "Duitsland" },
  { number: 14, name: "JANSSENS Jimmy", team: "Alpecin - Deceuninck", nationality: "België" },
  { number: 15, name: "KIELICH Timo", team: "Alpecin - Deceuninck", nationality: "België" },
  { number: 16, name: "PLANCKAERT Edward", team: "Alpecin - Deceuninck", nationality: "België" },
  { number: 17, name: "VAN DEN BOSSCHE Fabio", team: "Alpecin - Deceuninck", nationality: "België" },
  { number: 18, name: "PLOWRIGHT Jensen", team: "Alpecin - Deceuninck", nationality: "Australië" },

  // Arkéa - B&B Hotels
  { number: 21, name: "VERRE Alessandro", team: "Arkéa - B&B Hotels", nationality: "Italië" },
  { number: 22, name: "EPIS Giosuè", team: "Arkéa - B&B Hotels", nationality: "Italië" },
  { number: 23, name: "GUGLIELMI Simon", team: "Arkéa - B&B Hotels", nationality: "Frankrijk" },
  { number: 24, name: "HUYS Laurens", team: "Arkéa - B&B Hotels", nationality: "België" },
  { number: 25, name: "MOZZATO Luca", team: "Arkéa - B&B Hotels", nationality: "Italië" },
  { number: 26, name: "RIES Michel", team: "Arkéa - B&B Hotels", nationality: "Luxemburg" },
  { number: 27, name: "SVESTAD-BÅRDSENG Embret", team: "Arkéa - B&B Hotels", nationality: "Noorwegen" },
  { number: 28, name: "TJØTTA Martin", team: "Arkéa - B&B Hotels", nationality: "Noorwegen" },

  // Bahrain - Victorious
  { number: 31, name: "TIBERI Antonio", team: "Bahrain - Victorious", nationality: "Italië" },
  { number: 32, name: "BILBAO Pello", team: "Bahrain - Victorious", nationality: "Spanje" },
  { number: 33, name: "CARUSO Damiano", team: "Bahrain - Victorious", nationality: "Italië" },
  { number: 34, name: "EULÁLIO Afonso", team: "Bahrain - Victorious", nationality: "Portugal" },
  { number: 35, name: "GOVEKAR Matevž", team: "Bahrain - Victorious", nationality: "Slovenië" },
  { number: 36, name: "MIHOLJEVIĆ Fran", team: "Bahrain - Victorious", nationality: "Kroatië" },
  { number: 37, name: "PASQUALON Andrea", team: "Bahrain - Victorious", nationality: "Italië" },
  { number: 38, name: "ZAMBANINI Edoardo", team: "Bahrain - Victorious", nationality: "Italië" },

  // Cofidis
  { number: 41, name: "FRETIN Milan", team: "Cofidis", nationality: "Frankrijk" },
  { number: 42, name: "DEBEAUMARCHÉ Nicolas", team: "Cofidis", nationality: "Frankrijk" },
  { number: 43, name: "LASTRA Jonathan", team: "Cofidis", nationality: "Spanje" },
  { number: 44, name: "MAAS Jan", team: "Cofidis", nationality: "Nederland" },
  { number: 45, name: "MONIQUET Sylvain", team: "Cofidis", nationality: "België" },
  { number: 46, name: "OLDANI Stefano", team: "Cofidis", nationality: "Italië" },
  { number: 47, name: "PEREZ Anthony", team: "Cofidis", nationality: "Frankrijk" },
  { number: 48, name: "SAMITIER Sergio", team: "Cofidis", nationality: "Spanje" },

  // Team Visma | Lease a Bike
  { number: 181, name: "VAN AERT Wout", team: "Team Visma | Lease a Bike", nationality: "België" },
  { number: 182, name: "AFFINI Edoardo", team: "Team Visma | Lease a Bike", nationality: "Italië" },
  { number: 183, name: "KELDERMAN Wilco", team: "Team Visma | Lease a Bike", nationality: "Nederland" },
  { number: 184, name: "KOOIJ Olav", team: "Team Visma | Lease a Bike", nationality: "Nederland" },
  { number: 185, name: "KRUIJSWIJK Steven", team: "Team Visma | Lease a Bike", nationality: "Nederland" },
  { number: 186, name: "LEMMEN Bart", team: "Team Visma | Lease a Bike", nationality: "Nederland" },
  { number: 187, name: "VAN BAARLE Dylan", team: "Team Visma | Lease a Bike", nationality: "Nederland" },
  { number: 188, name: "YATES Simon", team: "Team Visma | Lease a Bike", nationality: "Groot-Brittannië" },

  // UAE Team Emirates
  { number: 201, name: "AYUSO Juan", team: "UAE Team Emirates", nationality: "Spanje" },
  { number: 202, name: "ARRIETA Igor", team: "UAE Team Emirates", nationality: "Spanje" },
  { number: 203, name: "BARONCINI Filippo", team: "UAE Team Emirates", nationality: "Italië" },
  { number: 204, name: "DEL TORO Isaac", team: "UAE Team Emirates", nationality: "Mexico" },
  { number: 205, name: "MAJKA Rafał", team: "UAE Team Emirates", nationality: "Polen" },
  { number: 206, name: "MCNULTY Brandon", team: "UAE Team Emirates", nationality: "Verenigde Staten" },
  { number: 207, name: "VINE Jay", team: "UAE Team Emirates", nationality: "Australië" },
  { number: 208, name: "YATES Adam", team: "UAE Team Emirates", nationality: "Groot-Brittannië" }
]; 