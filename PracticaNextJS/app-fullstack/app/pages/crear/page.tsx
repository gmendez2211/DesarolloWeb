"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uKt9Qy0ChwW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Nuevo Registro - Alumnos</CardTitle>
        <CardDescription>
          Ingrese la información que se solicita en el formulario de inscripción
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* ** Nombres ** */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Primer Nombre</Label>
            <Input id="PrimerNombres" placeholder="Ingrese Primer Nombre" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Segundo Nombre</Label>
            <Input id="SegundoNombre" placeholder="Ingrese Segundo Nombre" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Tercer Nombre</Label>
            <Input id="TercerNombre" placeholder="Ingrese Tercer Nombre" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
        >
          Guardar
        </Button>
      </CardFooter>
    </Card>
  );
  {
  }
}
