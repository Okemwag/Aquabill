import api from "./api";
import { RegisterRequest, LoginRequest, AuthResponse, MeterReading, Customer} from "./types";

export const registerUser = async (
   data: RegisterRequest
): Promise<AuthResponse> => {
   const response = await api.post<AuthResponse>("/customers/register/", data);
   console.log(response.data);
   return response.data;
};

export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
   const response = await api.post<AuthResponse>("/customers/login/", data);
   return response.data;
};

export const fetchMeterReadings = async (): Promise<MeterReading[]> => {
   const response = await api.get<MeterReading[]>("/meter-readings/");
   return response.data;
};

export const fetchCustomer = async (): Promise<Customer[]> => {
    const response = await api.get<Customer[]>("/customers/user/");
    return response.data;
};