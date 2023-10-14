/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import {useState} from 'react';
import './App.css';
import DateTimePretty from './components/DateTimePretty';
import shortid from 'shortid';

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function Video(props) {
  const NewTimeDate = DateTimePretty(DateTime);
    return (
        <div className="video">
            <iframe title="video" src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <NewTimeDate date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} key={shortid.generate()} />);
}

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([
    {
        url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2020-07-31 13:24:00'
    },
    {
        url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2021-08-03 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2022-09-03 23:16:00'
    },
    {
        url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-01-03 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-10-01 16:17:00'
    },
    {
        url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-10-14 17:24:00'
    },
]);

    return (
        <VideoList list={list} />
    );
}