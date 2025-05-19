import { useContext, useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { FaSearch } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { MyContext } from '../../App';

const CountryDrop = () => {
    const Context = useContext(MyContext);

    const [selectTab, setselectTab] = useState(null);
    const [isopenmodel, setisopenmodel] = useState(false);
    const [CountryList, setCountryList] = useState([]);

    const SelectCountry = (index) => {
        setselectTab(index);
        setisopenmodel(false);
    };

    useEffect(() => {
        setCountryList(Context.CountryList);
    }, [Context.CountryList]);

    const FilterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        const filtered = Context.CountryList.filter((item) => {
            return item.country.toLowerCase().includes(keyword);
        });
        setCountryList(filtered);
    };

    return (
        <>
            <div className="part2">
                <Button className="countrydrop" onClick={() => setisopenmodel(true)}>
                    <div className="info d-flex flex-column">
                        <span className="label">Your Location</span>
                        <span className="name">
                            {selectTab !== null ? CountryList[selectTab]?.country?.substr(0, 15) + '...' : 'Select your location'}
                        </span>
                    </div>
                    <span className="droparrow"><FaAngleDown /></span>
                </Button>
            </div>

            <Dialog open={isopenmodel} className='location-model'>
                <h5>Choose your location</h5>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='closed' onClick={() => setisopenmodel(false)}><IoMdClose /></Button>

                <div className="locationsearchbar">
                    <input
                        type="text"
                        placeholder="Search Your Location"
                        onChange={FilterList}
                    />
                    <button><FaSearch /></button>
                </div>

                <ul className='CountryList'>
                    {CountryList?.map((item, index) => (
                        <li key={index}>
                            <Button
                                onClick={() => SelectCountry(index)}
                                className={`${selectTab === index ? 'active' : ''}`}
                            >
                                {item.country}
                            </Button>
                        </li>
                    ))}
                </ul>
            </Dialog>
        </>
    );
};

export default CountryDrop;
