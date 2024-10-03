/* eslint-disable prettier/prettier */
import { LocationStore, DriverStore, MarkerData } from '@/types/type'
import { create } from 'zustand'

export const useLocationStore = create<LocationStore>((set) => ({
    userAddress: null,
    userLatitude: null,
    userLongitude: null,
    destinationLongitude: null,
    destinationLatitude: null,
    destinationAddress: null,
    setUserLocation: ({ latitude, longitude, address }: { latitude: number, longitude: number, address: string }) => {
        set(() => ({
            userLatitude: latitude,
            userLongitude: longitude,
            userAddress: address
        }))
    },
    setDestinationLocation: ({ latitude, longitude, address }: { latitude: number, longitude: number, address: string }) => {
        set(() => ({
            destinationLatitude: latitude,
            destinationLongitude: longitude,
            destinationAddress: address
        }))
    },
}))

export const useDriverStore = create<DriverStore>(() => ({
    drivers: [] as MarkerData[],
    selectedDriver: null,
    setSelectedDriver: (driveId: number) => set(() => ({ selectedDriver: driverId })),
    setDriver: (drivers: MarkerData[]) => set(() => ({ drivers: drivers })),
    clearSelectedDriver: () => set(() => ({ selectedDriver: null })),
}))