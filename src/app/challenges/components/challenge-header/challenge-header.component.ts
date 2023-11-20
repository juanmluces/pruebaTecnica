import { Component, Input } from '@angular/core';

type instructionPage = 'htmlCss' | 'angularMaterial' | 'apiRest' | 'forms' | 'components' | 'logic' | 'debug'

@Component({
  selector: 'challenge-header',
  templateUrl: './challenge-header.component.html',
  styleUrl: './challenge-header.component.scss'
})
export class ChallengeHeaderComponent {
  @Input({required: true}) title: string = ''
  @Input({required: true}) instructionPage!: instructionPage

  instructionsHtml = {
    htmlCss: `
    <p>Crea una <strong>Landing page</strong> que tenga:</p>
    <ul>
      <li>
        Un header con <strong>navbar y links</strong> (Inicio, Información, Proyectos, Contacto)
      </li>
      <li>
        Una <strong>imagen principal</strong> (Hero image) con un <strong>título y un botón CTA</strong>
      </li>
      <li>
        Un par de <strong>secciones</strong> con subtitulo y párrafos (pueden ser lorem ipsum)
      </li>
      <li>
       Un footer que tenga <strong>&#64;copyright Ingematic 2023 </strong>
      </li>
    </ul>
    <p>Se valorará el uso de etiquetas html semánticas</p>
    `,
    angularMaterial: `
    <p>Crea un <strong>Dashboard</strong> simple utilizando componentes de angular material</p>
    <p>Debes utilizar:</p>
    <ul>
      <li>
        <strong>Mat Toolbar</strong> para crear el header con un botón para abrir el drawer
      </li>
      <li>
        <strong>Mat Drawer o Mat SideNav</strong> donde tengas el mismo listado de elementos que en en las cards
      </li>
      <li>
        <strong>Mat Cards</strong> para hacer el grid de los elementos (tienes un array de elementos en <strong><em>angular-material.page.ts</em></strong>)
      </li>
    </ul>
    <p>Puedes utilizar mas componentes si deseas</p>
    `,
    apiRest: `
    <p>Consume la <strong>Api Rest</strong> de  <a href="https://jsonplaceholder.typicode.com/" target="_blank">https://jsonplaceholder.typicode.com/</a></p>
    <p>Puedes user el servicio <strong>api-rest.service.ts</strong> para tu lógica de llamada a la api</p>
    <ul>
    <li>
      Hacer una llamada <strong>Get all Posts</strong> y filtra los post que tengan un <strong>userId con número par</strong>
    </li>
    <li>
      Hacer una llamada <strong>Post</strong> para crear un nuevo post
    </li>
    </ul>
    <p>
    Se valorará la creación de una interfaz simple para hacer trigger de la llamada y poder introducir los valores para el body de la llamada POST
    </p>
    
    `,
    forms: `
    <p>Crea un formulario usando el <strong>Reactive Forms Module </strong>(FormGroup y FormControls)</p>
    <p>El formulario debe tener:</p>
    <ul>
    <li>
     Campo obligatorio <strong>Name</strong>
    </li>
    <li>
     Campo obligatorio <strong>Surname</strong>
    </li>
    <li>
     Campo obligatorio <strong>Email</strong>
    </li>
    <li>
     Campo opcional <strong>Address</strong>
    </li>
    <li>
    Campo obligatorio <strong>Password</strong>
   </li>
    <li>
    Campo obligatorio <strong>Repeat password</strong>
   </li>
    </ul>
    <p>
    Debe existir una validación para asegurar que los campos <strong>Password y Repeat password coinciden</strong>
    </p>
    <p>
    Añade un botón de submit que haga un <em>console.log</em> del valor del formulario
    </p>
    <p>
    Se valorará el uso de componentes de <strong>Angular Material</strong>
    </p>
    
    `,
    components: `
    <p>Crea un componente que sea una <strong>Card</strong> y renderiza por lo menos <strong>dos</strong> en la página</p>
    <p>El componente debe:</p>
    <ul>
    <li>
     Recibir un <strong>Title</strong> y una <strong>ImageUrl</strong> del padre y renderizarlos en su card
    </li>
    <li>
    Tener un botón que al hacer click el padre debe aumentar un contador
    </li>
    <li>
    Tener un botón que al hacer click aumente un contador en <strong>TODAS las instancias </strong> del componente que has creado
    </li>
    </ul>
    <p>
    Crea el componente en la carpeta <em>src/app/challenges/components/{{tuComponente}}/{{tuComponente}}.component.ts</em>
    </p>
    <p>
    Puedes crear los servicios que quieras en la carpeta <em>src/app/challenges/services/{{tuComponente}}</em>
    </p>    
    <p>
    Puedes utilizar el <strong>cli</strong> o crear los componentes <strong>a mano</strong>
    </p>
    `,
    logic: `
    <p>Crea una simple app de <strong>To-Do list</strong> que cumpla con las operaciones <strong>CRUD</strong></p>
    <p>Tienes libertad para decidir cómo implementarlo</p>
    <p>Como funciones mínimas debe poder:</p>
    <ul>
    <li>
      Recuperar todas las tareas
    </li>
    <li>
      Insertar una nueva tarea
    </li>
    <li>
      Borrar una tarea
    </li>
    <li>
    Filtrar las tareas por un input
    </li>
    </ul>
    <p>
    Puedes crear todos los componentes y servicios que necesites en <br><em>src/app/challenges/components/{{tuComponente}}/{{tuComponente}}.component.ts</em>
    </p>
    `,
    debug: ''
  }

}
