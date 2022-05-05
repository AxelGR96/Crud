<template>
    <div>
        <div class="grid grid-cols-1 text-center">

            <div
                class="mb-5 ml-3 mr-3 bg-emerald-400 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8  dark:border-gray-700">
                <span class="text-3xl">Actualizar Datos del Empleado</span>
            </div>


            <div
                class="ml-3 mr-2 mb-10 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">

                <div class="grid grid-cols-2 gap-7">
                    <div class="mb-6">
                        <label for="empleado" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Nombre del Empleado</label>
                        <input type="text" id="empleado"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="$route.params.name" required>
                    </div>

                    <div class="mb-6">
                        <label for="apellidos"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Apellidos</label>
                        <input type="text" id="apellidos"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="$route.params.lastName" required>
                    </div>
                </div>

                <div class="grid grid-cols-2 items-center gap-3">

                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            E-mail</label>
                        <input type="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="$route.params.email" required>
                    </div>

                    <div class="mb-6">
                        <label for="Edad"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Edad</label>
                        <input type="number" id="Edad"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="$route.params.age" required>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-7">
                    <div class="mb-6">
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Teléfono</label>
                        <input type="number" id="phone"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="$route.params.phone" required>
                    </div>

                    <div class="mb-6">
                        <label for="rol"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rol</label>
                        <input type="text" id="rol"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="$route.params.rol" required>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        @click="main.editEmployee($route.params.id, $route.params.name, $route.params.lastName, $route.params.email, $route.params.age, $route.params.phone, $route.params.rol)">Actualizar
                        Datos</button>
                </div>



            </div>
        </div>


        <div class="grid grid-cols-6  text-center">
            <div class="col-start-2 col-span-4">
                <NuxtLink to="/" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center
                border border-blue-700 rounded"><i class="fa-solid fa-circle-left"></i>Regresar al inicio</NuxtLink>
            </div>

        </div>

    </div>

</template>

<script setup>
import { useEmployees } from '~~/store/employees';
const main = useEmployees();
let employee = {};
//const data = this.route.params.data;
//console.log(data);
</script>
