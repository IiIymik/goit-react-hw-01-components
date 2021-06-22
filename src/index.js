import ReactDOM from 'react-dom';
import cards from './card.json';
const data = cards[0];

const card = (
  <div className="profile">
    <div className="description">
      <img src={data.avatar} alt={data.name} className="avatar" width="260px" />
      <p className="name">{data.name}</p>
      <p className="tag">@{data.tag}</p>
      <p className="location">{data.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{data.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{data.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{data.likes}</span>
      </li>
    </ul>
  </div>
);

ReactDOM.render(card, document.querySelector('#root'));

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// //////////////////////////////////////////////////
