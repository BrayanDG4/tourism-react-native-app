import { create } from "zustand";

export const useFormStore = create((set) => ({
  formData: {
    Documento: "",
    Nombre: "",
    Telefono: "",
    Comercio: "",
    Correo: "",
    Tipo: "",
    Plan: "",
  },
  setFormData: (data) => {
    set((state) => ({ formData: data }));
    console.log(data);
  },
}));

export default useFormStore;
