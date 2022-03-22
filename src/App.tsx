import React from "react";
import { LoginForm } from "./LoginForm";

import { ThankYou } from "./ThankYou";

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  whenLogin(userData) {
    if (userData.email && userData.password) {
      console.log(userData);
      this.setState({ loggedIn: true });
    } else {
      window.alert("Datos incorrectos");
    }
  }

  render() {
    //showForm va a ser true cuando loggedIn sea false
    const showForm = !this.state.loggedIn;

    return showForm ? (
      <LoginForm
        onLogin={(val) => {
          this.whenLogin(val);
        }}
      />
    ) : (
      <div className="card-container">
        <ThankYou></ThankYou>
      </div>
    );
  }
}

export { App };

// class Comp1 extends React.Component<any, any> {
//   render() {
//     return <div>{this.props.children}</div>;
//   }
// }

// type PropsDeComp2 = {
//   texto: string;
//   children?: any;
//   onEvento?: (a: string) => any;
// };

// function Comp2(props: PropsDeComp2) {
//   const nuevoTexto = props.texto.replace(/ /g, "-");
//   const onClickDeDiv = (e) => {
//     props.onEvento("Soy el onClickDeDiv, me hicieron click");
//   };
//   return (
//     <div onClick={onClickDeDiv}>
//       <h1>{nuevoTexto}</h1>
//       <div>{props.children}</div>
//     </div>
//   );
// }
// //Cuando hago click en el comp 2 se activa el prop.onEvento que este
// //un callback de un comp es una prop
// class App extends React.Component<any, any> {
//   render() {
//     return (
//       <div>
//         <Comp1>COMPONENTE 1</Comp1>
//         <Comp2
//           texto={"hola que tal"}
//           onEvento={(param) =>
//             console.log(param, "Soy el onEvento, me hicieron click")
//           }
//         >
//           Hola soy comp2
//         </Comp2>
//       </div>
//     );
//   }
// }

// export { App };
