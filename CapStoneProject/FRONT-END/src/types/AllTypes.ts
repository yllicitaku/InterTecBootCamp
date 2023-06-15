export type OrderFormType = {
    _id: string | undefined;
    brand: string | undefined | null;
    fromDate: Date | undefined | string;
    toDate: Date | undefined | string;
    carType: string | undefined | null;
    carModel: string | undefined | null;
    gps: boolean | undefined | null;
    _4x4: boolean | undefined | null;
    transmission:string | undefined | null;
    engCapacity: number | undefined | null;
    img: string | undefined | null;
    price: number | undefined | null;
    duration: number | undefined | null;
};
export type SettingsMenuType = {
    ig: string;
};

export type UserType = {
    _id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    token?: string;
};

export type SignInType = {
    email: string;
    password: string;
};

export const anon_user: UserType = {
    _id: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    token: "",
};

export type TCar = {
    _id: string;
    carType: string;
    carModel: string;
    brand: string;
    gps: boolean;
    _4x4: boolean;
    transmission:string;
    engCapacity: number;
    img: string[];
    price: number;
};

export const newObj: OrderFormType = {
    _id: undefined,
    brand: "",
    fromDate: undefined,
    toDate: undefined,
    carType: undefined,
    carModel: undefined,
    gps: undefined,
    _4x4: undefined,
    transmission:undefined,
    engCapacity: undefined,
    img: undefined,
    price: undefined,
    duration: undefined,
};
