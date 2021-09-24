import './App.css';
import Address from './components/profile/Address';
import FullName from './components/profile/FullName';
import Profilephoto from './components/profile/profilephoto';


function App () {

return (
 <div className = "APP">
   <FullName />
   <Address/>
   <Profilephoto />
 </div>
);
};

export default App;
