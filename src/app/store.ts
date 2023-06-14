import { create } from 'zustand';

const contactStore = create((set) => ({
firstname: '',
lastname: '',
birth: '',
email: '',
informations: '',

setFirstname: (firstname: string) => set (() => ({firstname: firstname})),
setLastname: (lastname: string) => set (() => ({lastname: lastname})),
setBirth: (birth: number) => set (() => ({birth: birth})),
setEmail: (email: string) => set (() => ({email: email})),
setInformations: (informations: string) => set (() => ({informations: informations})),
}))

export default contactStore;

