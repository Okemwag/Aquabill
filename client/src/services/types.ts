export interface RegisterRequest {
   username: string;
   email: string;
   password1: string;
   password2: string;
}

export interface LoginRequest {
   email: string;
   password: string;
}

export interface AuthResponse {
   token: string;
}


export interface MeterReading {
  id: string;
  meter: {
    meter_id: string;
  };
  reading: number;
  usage: number;
  timestamp: string;
}

export interface Customer {
    id: number;
    username: string;
    email: string;
    
}