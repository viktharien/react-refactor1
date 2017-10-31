import Jumbo from '../elements/all-jumbo';

import Carousel from '../elements/carousel-howwehelp';

class HowWeHelp extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      header:'Våsa Broadkaster og Massa Tekste Servësa',
      sub:'Send ëmportant alerte, notëfëkadje, og remëndrare i yøst mënøte med ör altomatda messadjer servësa.',
      
    };
   
    
  }
  
  render() {
    return (
      <div id="page-howwehelp" className="page">
        <Jumbo header={this.settings.header} sub={this.settings.sub}/>
        <Carousel />
      </div>
    );
  }
}

export default HowWeHelp;