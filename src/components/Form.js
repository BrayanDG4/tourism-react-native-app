import React from "react";
import { useState } from "react";

import { Text, StyleSheet, TextInput, ToastAndroid } from "react-native";

import { useForm, Controller } from "react-hook-form";

import { CustomButton } from "../components/CustomButton.js";
import { PickerSelect } from "../components/PickerSelect.js";

import useFormStore from "../store/formStore.js";

import {_URL} from '../global/globalConst.js';

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const isDocumentValid = (value) => {
    const specialCharacterPattern = /[!@#$%^&*()_+{}[\]:",.<>?/\\|~`\-;='\\]/;

    if (value.includes(".")) {
      return "No se permiten puntos en el documento.";
    }

    if (specialCharacterPattern.test(value)) {
      return "No se permiten caracteres especiales";
    }
    return true;
  };

  const showToast = () => {
    ToastAndroid.show("Enviado con éxito!", ToastAndroid.SHORT);
  };

  const setFormData = useFormStore((state) => state.setFormData);

  const [plan, setPlan] = useState();

  const handlePickerSelect = (value, index) => {
    setPlan(index);
  };

  const onSubmit = (data) => {
    const formData = { ...data, Plan: plan };
    setFormData(formData);
    console.log(formData);
    showToast();
    const URL = _URL;
    // fetch(URL).then((res) => console.log(JSON.stringify(res)));

    let newData = {
      dni: formData.Documento,
      full_name: formData.Nombre,
      phone: formData.Telefono,
      commerce_name: formData.Comercio,
      mail: formData.Correo,
      commerce_type: formData.Tipo,
      suscription: formData.Plan,
    };

    fetch(`${URL}/register`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }).then((res) => console.log(JSON.stringify(res)));
  };

  return (
    <>
      {errors?.Documento &&
        (errors.Documento.type === "maxLength" ||
          errors.Documento.type === "required" ||
          errors.Documento.type === "validate") && (
          <Text style={{ color: "#ff6673" }}>{errors.Documento.message}</Text>
        )}

      <Controller
        control={control}
        name="Documento"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.inputContainer}
            iconName="person"
            iconType="MaterialIcons"
            placeholder="Documento"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Campo requerido",
          },
          maxLength: {
            value: 11,
            message: "Longitud máxima 11 caracteres",
          },
          validate: isDocumentValid,
        }}
      />

      {errors?.Nombre &&
        (errors.Nombre.type === "maxLength" ||
          errors.Nombre.type === "required" ||
          errors.Nombre.type === "validate") && (
          <Text style={{ color: "#ff6673" }}>{errors.Nombre.message}</Text>
        )}

      <Controller
        control={control}
        name="Nombre"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.inputContainer}
            iconName="person"
            iconType="MaterialIcons"
            placeholder="Nombre"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Campo requerido",
          },
          maxLength: {
            value: 32,
            message: "Longitud máxima 32 caracteres",
          },
          validate: isDocumentValid,
        }}
      />

      {errors?.Telefono &&
        (errors.Telefono.type === "maxLength" ||
          errors.Telefono.type === "required" ||
          errors.Telefono.type === "validate") && (
          <Text style={{ color: "#ff6673" }}>{errors.Telefono.message}</Text>
        )}

      <Controller
        control={control}
        name="Telefono"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.inputContainer}
            iconName="person"
            iconType="MaterialIcons"
            placeholder="Telefono"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Campo requerido",
          },
          maxLength: {
            value: 10,
            message: "Longitud máxima 10 caracteres",
          },
          validate: isDocumentValid,
        }}
      />

      {errors?.Comercio &&
        (errors.Comercio.type === "maxLength" ||
          errors.Comercio.type === "validate") && (
          <Text style={{ color: "#ff6673" }}>{errors.Comercio.message}</Text>
        )}

      <Controller
        control={control}
        name="Comercio"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.inputContainer}
            iconName="person"
            iconType="MaterialIcons"
            placeholder="Nombre del comercio"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Campo requerido",
          },
          maxLength: {
            value: 50,
            message: "Longitud máxima 50 caracteres",
          },
          validate: isDocumentValid,
        }}
      />

      {errors?.Correo && errors.Correo.type === "pattern" && (
        <Text style={{ color: "#ff6673" }}>{errors.Correo.message}</Text>
      )}

      <Controller
        control={control}
        name="Correo"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.inputContainer}
            iconName="person"
            iconType="MaterialIcons"
            placeholder="Correo"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Campo requerido",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Ingresa un correo válido.",
          },
        }}
      />

      <Controller
        control={control}
        name="Tipo"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.inputContainer}
            iconName="person"
            iconType="MaterialIcons"
            placeholder="Tipo de comercio"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Campo requerido",
          },
        }}
      />

      <PickerSelect
        placeholderlabel={"Selecciona un plan"}
        items={[
          { label: "3 Meses - $90.000", value: "3" },
          { label: "6 Meses - $140.000", value: "6" },
          { label: "12 Meses - $190.000", value: "12" },
        ]}
        onChange={handlePickerSelect}
      />

      <CustomButton
        onPress={handleSubmit(onSubmit)}
        text={"Enviar"}
        bgColor={"#0284c7"}
        color={"white"}
        fontSize={18}
        borderRadius={8}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#e2e8f0",
    paddingHorizontal: 5,
    borderRadius: 8,
    width: "100%",
    paddingVertical: 12,
    marginBottom: 8,
  },
});
