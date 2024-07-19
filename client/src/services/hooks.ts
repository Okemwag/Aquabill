import { useMutation, useQuery} from "@tanstack/react-query";
import {
   registerUser,
   loginUser,
   fetchMeterReadings,
   fetchCustomer,
} from "./auth";

import { RegisterRequest, LoginRequest, AuthResponse, MeterReading, Customer } from "./types";

export const useRegister = () => {
   return useMutation<AuthResponse, Error, RegisterRequest>({
      mutationFn: (data: RegisterRequest) => registerUser(data),
   });
};

export const useLogin = () => {
   return useMutation<AuthResponse, Error, LoginRequest>({
      mutationFn: (data: LoginRequest) => loginUser(data),
   });
};

export const useLogout = () => {
    return useMutation<void, Error, void>({
        mutationFn: () => Promise.resolve(),
    });
};

export const useMeterReading = () => {
   return useQuery<MeterReading[], Error>({
      queryKey: ["meterReadings"],
      queryFn: fetchMeterReadings,
   });
};

export const useCustomer = () => {
    return useQuery<Customer[], Error>({
        queryKey: ["customer"],
        queryFn: fetchCustomer,
    });
};