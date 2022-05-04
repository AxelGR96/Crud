<template>
    <div class="mx auto w-ful">
        <div class="flex justify-center">
            <NuxtLink to="/create" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
            border border-blue-700 rounded">Registrar Empleado Nuevo</NuxtLink>
        </div>

        <div class="grid grid-cols-4 mt-3">
            <div v-for="item in main.employee" :key="item.name"
                class="ml-3 mb-5 flex flex-row p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-5">
                    <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="../assets/profile.png" alt="Bonnie image" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ item.name }}</h5>
                    <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-2">{{ item.rol }}</h3>
                    <h4 class="text-sm text-gray-500 dark:text-gray-400 mt-3">{{ item.email }}</h4>
                    <span class="text-sm text-gray-500 dark:text-gray-400 mt-3">{{ item.phone }}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400 mt-3">{{ item.age }} Años</span>


                    <div class="flex mt-4 space-x-3 lg:mt-3">
                        <!--<button
                            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            @click="main.editEmployee(item)">
                            Editar Empleado</button>-->
                        <NuxtLink
                            :property="item"
                            :to="{ name: 'update', params: { id: item.id, name: item.name, lastName: item.lastName, email: item.email, age: item.age, phone: item.phone, rol: item.rol } }"
                            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Editar Empleado</NuxtLink>
                        <button
                            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                            @click="main.deleteEmployee(item.id)">
                            Eliminar Empleado</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useEmployees } from '~~/store/employees';
const main = useEmployees();
let employee = {};
console.log(main);
</script>