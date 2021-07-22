
import './App.css';
import UserObject from './UserObject'

function App() {
  const users = [
    {
      name: 'Elon musk',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'Elon Musk',
      twitterLink: <a href = "https://twitter.com/chrisnode">@chrisnode</a>,
      avatar: 'https://i1.wp.com/businessday.ng/wp-content/uploads/2020/01/Untitled-design-2020-01-15T121232.017.png?fit=600%2C400&ssl=1'
    },
 {
      name: 'Chris Morgan',
      location: 'Florida',
      foodType: 'Chiken and Chips',
      age: 45,
      likes: 'Swimming and Reading',
      twitterUsername: 'Morgan45',
      twitterLink: <a href = "https://twitter.com/chrisnode">@morgan45</a>,
      avatar:
        'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    }
  ]
  return (
    <div className="App">
      
      
      <UserObject profile = {users} />



    </div>
  );
}

export default App;
