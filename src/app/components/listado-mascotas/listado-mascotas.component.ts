import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';   //Importaciones 
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/Interfaces/mascota';



const LISTADO_MASCOTAS: Mascota[] = [                                 // propiedades del componente, los datos
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color:'Dorado', peso: 13  },
  {nombre: 'Rudock', edad: 13, raza: 'Objero Aleman', color:'Negro', peso: 15 },
  {nombre: 'Fluki', edad: 12, raza: 'Breton', color:'Blanco y marron', peso: 6 },
  {nombre: 'Branca', edad: 15, raza: 'Perdicero', color:'Marroncita', peso: 11 },
  {nombre: 'Shercan', edad: 15, raza: 'Perdicero', color:'Blanco', peso: 12  }
];

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})

export class ListadoMascotasComponent implements OnInit, AfterViewInit{  // Necesario implementar los metodos en la class
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', 'Acciones'];
  dataSource = new MatTableDataSource<Mascota>(LISTADO_MASCOTAS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() { }

  ngOnInit(): void {  // METODO para inicializar el componente y sus datos
    
  }

  ngAfterViewInit() {                                               // METODO para ordenar las vistas secundarias, hijas, del componente.
    this.dataSource.paginator = this.paginator; 
    this.paginator._intl.itemsPerPageLabel = 'Mascotas por pagina';
    this.dataSource.sort = this.sort;
  } 

  applyFilter(event: Event) {                                       // METODO Cuando se teclea en el filtro
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
