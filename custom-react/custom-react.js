const rootContainer = document.querySelector("#root");

const reactElement = {
                      type : 'a' ,
                      props : {
                                 href : 'www.google.com' , 
                                 target : '_blank'
                              },
                      children : 'Click Me!'
                  
                }

function customRender(reactElement , rootContainer)
{
     const domElement = document.createElement(reactElement.type);
     domElement.innerHTML = reactElement.children;
     domElement.setAttribute('href' , reactElement.props.href);
     domElement.setAttribute('target' , reactElement.props.target);
     rootContainer.appendChild(domElement);
}
customRender(reactElement , rootContainer);

