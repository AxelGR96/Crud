import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid';
 export const useEmployees = defineStore("Employees",{
  //State
  state: () => ({
      employee: [
        {
          id: uuidv4(),
          name: "Axel", 
          lastName: "García Román",
          age: 25,
          phone: 8116955277,
          rol: "Desarrollador Web",
          email: "axelgr96@hotmail.com"
        },
        {
          id: uuidv4(),
          name: "Rodolfo",
          lastName: "Jaime Alba",
          age: 24,
          phone: 811695544,
          rol: "Periodista",
          email: "rodoalba@hotmail.com"
        }
      ],
  }),
  //Actions
  actions: {
    addEmployee(item){
      this.employee.push({
        id: uuidv4(),
        name: item.name,
        lastName: item.lastName,
        age: item.age,
        phone: item.phone,
        email: item.email,
        rol: item.rol,
      });
    },
    deleteEmployee(id){
      this.employee.splice(id, 1);
    },
    editEmployee(id,name,lastName,email,age,phone,rol){
      const index = this.employee.findIndex((el) => el.id === id);
      this.employee[index].name = name;
      this.employee[index].lastName = lastName;
      this.employee[index].email = email;
      this.employee[index].age = age;
      this.employee[index].phone = phone;
      this.employee[index].rol = rol;
    },
  }
})

