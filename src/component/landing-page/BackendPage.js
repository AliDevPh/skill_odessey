import React, { useState } from 'react';
import backendlogo from './backend.drawio.png';
import icon from './User_fill@2x.png';
import left from './Expand_left_double@2x.png';
import signout from './signout.png';
import home from './Home_fill@2x.png';
import mortar from './Mortarboard_light@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const BackendPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSidebarCaching, setShowSidebarCaching] = useState(false);
  const [showSidebarFundamentals, setShowSidebarFundamentals] = useState(false);
  const [showSidebarJava, setShowSidebarJava] = useState(false);
  const [showSidebarBcrypt, setShowSidebarBcrypt] = useState(false);
  const [ShowSidebarWebSecurity, setShowSidebarWebSecurity] = useState(false);
  const [showSidebarHttps, setShowSidebarHttps] = useState(false);
  const [showSidebarCors, setShowSidebarCors] = useState(false);
  const [showSidebarServerSecurity, setShowSidebarServerSecurity] = useState(false);
  const [showSidebarUnitTesting, setShowSidebarUnitTesting] = useState(false);
  const [showSidebarIntegrationTesting, setShowSidebarIntergrationTesting] = useState(false);
  const [showSidebarContinous, setShowSidebarContinous] = useState(false);
  const [showSidebarTesting, setShowSidebarTesting] = useState(false);
  const [showSidebarScalingDatabase, setShowSidebarScalingDatabase] = useState(false);
  const [showSidebarCapTheorem, setShowSidebarCapTheorem] = useState(false);
  const [showSidebarDatabaseIndexes, setShowSidebarDatabaseIndexes] = useState(false);
  const [showSidebarShardingStrategies, setShowSidebarShardingStrategies] = useState(false);
  const [showSidebarNginx, setShowSidebarNginx] = useState(false);
  const [showSidebarApache, setShowSidebarApache] = useState(false);
  const [showSidebarCaddy, setShowSidebarCaddy] = useState(false);
  const [showSidebarWebServers, setShowSidebarWebServers] = useState(false);
  const [showSidebarServerScent, setShowSidebarServerScent] = useState(false);
  const [showSidebarWebStocks, setShowSidebarWebStocks] = useState(false);
  const [showSidebarLongShort, setShowSidebarLongShort] = useState(false);
  const [showSidebarRealtime, setShowSidebarRealtime] = useState(false);
  const [showSidebarScrypt, setShowSidebarScrypt] = useState(false);
  const [showSidebarAuthenticationAPIs, setShowSidebarAuthenticationAPIs] = useState(false);
  const [showSidebarBasicAuth, setShowSidebarBasicAuth] = useState(false);
  const [showSidebarTokenAuth, setShowSidebarTokenAuth] = useState(false);
  const [showSidebarQs1, setShowSidebarQs1] = useState(false);
  const [showSidebarQs2, setShowSidebarQs2] = useState(false);
  const [showSidebarQs3, setShowSidebarQs3] = useState(false);
  const [showSidebarAuth, setShowSidebarAuth] = useState(false);
  const [showSidebarPhp, setShowSidebarPhp] = useState(false);
  const [showSidebarJavascript, setShowSidebarJavascript] = useState(false);
  const [showSidebarPython, setShowSidebarPython] = useState(false);
  const [showSidebarPostgressql, setShowSidebarPostgressql] = useState(false);
  const [showSidebarMariaDb, setShowSidebarMariaDb] = useState(false);
  const [showSidebarMysql, setShowSidebarMysql] = useState(false);
  const [showSidebarJwt, setShowSidebarJwt] = useState(false);
  const [showSidebarRest, setShowSidebarRest] = useState(false);
  const [showSidebarJason, setShowSidebarJason] = useState(false);
  const [showSidebarGraphql, setShowSidebarGraphql] = useState(false);
  const [showSidebarCDN, setShowSidebarCDN] = useState(false);
  const [showSidebarRelationalDatabase, setShowSidebarRelationalDatabase] = useState(false);
  const [showSidebarAPIS, setShowSidebarAPIS] = useState(false);
  const [showSidebarClientSide, setShowSidebarClientSide] = useState(false);

  
  const [showLoginCard, setShowLoginCard] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    
    <div className='justify-between flex items-center max-w-[1240px] mx-auto text-white mt-8 '>
                <div className='flex items-center'>
                    <div className='flex items-center px-5'><FontAwesomeIcon icon={faCube} style={{ color: "#38bcf5", fontSize: '5em' }} /></div>
                    <div className='text-3xl font-bold text-[#00df9a]'>SKILL ODESSEY</div>
                    </div>
                    <div className="dropdown relative">
      <button
        className="flex items-center border-2 rounded-lg px-5 py-1 border-purple-500 border-opacity-75  hover:text-white focus:outline-none focus:ring-2"
        onClick={handleClick}
      >
        <img src={icon} alt="My Logo" style={{ maxWidth: '30px', height: 'auto' }} />
        <div className='ml-2'> Account</div>
       
      </button>
      {isOpen && (
        <div className="dropdown-content absolute top-full  bg-black rounded-lg shadow-md overflow-hidden z-50  mt-2 p-1 ">
          <div className='flex-row flex items-center hover:bg-neutral-700  pr-16 pl-2  '>
          <img src={home} alt="My Logo" style={{ maxWidth: '25px', height: 'auto' }} />
          <a href="/" className="block  ml-2 py-2 ">
            Home
          </a>
          </div>
          <div className='flex-row flex items-center hover:bg-neutral-700 pl-2   '>
          <img src={signout} alt="My Logo" style={{ maxWidth: '25px', height: 'auto' }} />
          <a href="/FrontPage" className="block ml-2 py-2 ">
            Logout
          </a>
        </div>
        </div>
      )}
    </div>
    

    </div>
    <div div className='flex flex-col justify-between max-w-[1240px] mx-auto text-white mt-8 '>
      <div className='text-5xl ml-4 mt-10'>
      Backend Developer
      </div>
      <div className='text-lg ml-4 mt-4'>
      Step by step guide to becoming a modern backend developer in 2024
   </div>
    <div className='flex flex-row text-sm ml-4 mt-4 border w-36 p-2 rounded-lg items-center justify-center hover:border-yellow-400 cursor-pointer'>
      <div>
      <img src={left} alt="My Logo" style={{ maxWidth: '20px', height: 'auto' }} />
      </div>
      <a href="FrontPage"><button onClick={() => setShowLoginCard(true)} ml-2 >All Roadmaps</button>
      </a>
        </div>

        <div className="flex flex-col ">
        <div className='border border-[#1E293C] text-base cursor-pointer hover:border-slate-600 m-4 mt-8 p-[2px] rounded-lg'
        onClick={() => setShowSidebar(!showSidebar)}>
      <div className="flex items-center">
        <img
          src={mortar}
          alt="My Logo"
          style={{ maxWidth: '100px', height: 'auto' }}
        />
        <div
          className='ml-4 font-semibold'
          
        >
          What is Backend Development?
        </div>
      </div>
    {showSidebar && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">What is Backend Development?</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebar(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#1a1c1f]">
      Front-end development is the development of visual and interactive elements of a website
       that users interact with directly. It's a combination of HTML, CSS and JavaScript, where 
       HTML provides the structure, CSS the styling and layout, and JavaScript the dynamic behaviour and interactivity.
      </p>
      <div className='text-black ml-4'>
        <p className='font-semibold'>
        What does a Frontend Developer do?
        </p>
      <p className='text-[#1a1c1f] mt-2'>
      As a front-end developer, you'll be responsible for creating the user interface of a website, to ensure it looks good and is easy to use, with great focus on design principles and user experience. You'll be working closely with designers, back-end developers, and project managers to make sure the final product meets the client's 
      needs and provides the best possible experience for the end-users.
      </p>
      </div>
    </div>
  </div>
)}

  </div>
</div>
        <div className=' ml-4 h-32 mt-6 p-2 flex flex-col w-[300px] text-sm justify-center text-center '>
        <div className='flex flex-row gap-2 items-center ml-4 '>
            <div className='p-2 bg-yellow-300 px-2 h-2'></div>
            <div className=''>Personal Recommendation / Opinion</div>
          </div>
          <div className='flex flex-row gap-2 mt-2 items-center ml-4  '>
            <div className='p-2 bg-green-400 px-2 h-2'></div>
            <div className=''>Alternative Option</div>
          </div>
          <div className='flex flex-row gap-2 mt-2 items-center ml-4 '>
            <div className='p-2 bg-white px-2 h-2'></div>
            <div className=''>Learn Anytime</div>
          </div>
        </div>
        <div className="text-white flex flex-col items-center pt-10 mt-[-150px]">
      <div className="flex flex-col items-center ">
        <div className='p-2 text-xl ml-2'>Backend</div>

        <div className='flex flex-row '> 
        <div className="flex flex-col ">
  <div className="flex">
        <button className='p-2 border-2 rounded-xl mt-[108px] ml-[350px] h-[45px] cursor-pointer z-40 '
        onClick={() => setShowSidebarFundamentals(!showSidebarFundamentals)}>
          Fundamentals</button>
          {showSidebarFundamentals && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Fundamentals</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarFundamentals(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
        Software development fundamentals are provided by programming languages, which also include syntax. Clear and effective code writing in any language requires a solid understanding of basic concepts such as variables, functions, control structures, and data kinds. Developers that comprehend these fundamentals are better equipped to solve challenges creatively and effectively by adapting to new languages and technologies.
      </p>
    </div>
  </div>
)}

  </div>
</div>

        <div>
        <div className="flex flex-col ">
  <div className="flex">
        <button className=' p-2 border-2 rounded-xl  px-[30px] ml-64 mb-4 border-green-400 cursor-pointer z-40'
         onClick={() => setShowSidebarJava(!showSidebarJava)}>
          Java</button>
          {showSidebarJava && (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarJava(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Java</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
         
<div className="flex flex-col ">
  <div className=" flex ">
        <div className=' p-2 border-2 rounded-xl ml-64 mb-4 z-40 px-8 cursor-pointer'
         onClick={() => setShowSidebarPhp(!showSidebarPhp)}>
          PHP</div>
          
          {showSidebarPhp && (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarPhp(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>PHP</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-64 mb-4 border-yellow-300 z-40 cursor-pointer' 
        onClick={() => setShowSidebarJavascript(!showSidebarJavascript)}>
          Javascript</div>
          {showSidebarJavascript && (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarJavascript(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Javascipt</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-64 border-yellow-300 z-40 cursor-pointer'
         onClick={() => setShowSidebarPython(!showSidebarPython)}>
          Python</div>
          {showSidebarPython && (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarPython(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Python</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
        </div>
        </div>
        
        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col mt-12 mr-20 '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 cursor-pointer z-40 ' 
        onClick={() => setShowSidebarPostgressql(!showSidebarPostgressql)}>
          Postgressql
        </div>
        {showSidebarPostgressql&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarPostgressql(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Postgressql</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-yellow-300  text-center cursor-pointer z-40'
        onClick={() => setShowSidebarMysql(!showSidebarMysql)}>
          Mysql</div>
          {showSidebarMysql&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarMysql(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Mysql</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl border-green-400  text-center cursor-pointer z-40'
        onClick={() => setShowSidebarMariaDb(!showSidebarMariaDb)}>
          MariaDb</div>
          {showSidebarMariaDb&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarMariaDb(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>MariaDb</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
        </div>
        <div>
        <div className="flex flex-col ">
  <div className="flex">
        <div className='p-2 border-2 rounded-xl mt-[54px] ml-[60px] cursor-pointer z-40'
         onClick={() => setShowSidebarRelationalDatabase(!showSidebarRelationalDatabase)}>
          Relational Database</div>
          {showSidebarRelationalDatabase && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Relational Database</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarRelationalDatabase(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      Relational databases are a kind of database management system (DBMS) that creates
       associations between data by arranging it into tables with rows and columns. They are
        frequently used to store structured data and make effective administration and querying possible. 

      </p>
    </div>
  </div>
)}

  </div>
</div>

        </div>
        </div>
        
        <div className='flex flex-row '> 
        <div>
        <div className="flex flex-col ">
  <div className="flex">
          <div className='p-2 border-2 rounded-xl mt-[-12px] ml-[440px] cursor-pointer z-40'
          onClick={() => setShowSidebarAPIS(!showSidebarAPIS)}
          >APIs</div>
          {showSidebarAPIS&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">APIs</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarAPIS(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      An API is a set of rules (interface) that two separate systems or programs—one on 
      a publishing side and one on an accessing side—agree to follow. The company publishing
       the API then implements their side by writing a program and putting it on a server.


      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        <div className='flex flex-col   '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  ml-[350px] mb-4 mt-[-16px] border-yellow-300 cursor-pointer z-40'
        onClick={() => setShowSidebarRest(!showSidebarRest)} >Rest</div>
        {showSidebarRest&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarRest(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Rest</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-[350px] mb-4 border-green-400  cursor-pointer z-40' 
        onClick={() => setShowSidebarJason(!showSidebarJason)}>Jason</div>
        {showSidebarJason&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarJason(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Jason</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-[350px] mb-4 cursor-pointer z-40' 
        onClick={() => setShowSidebarGraphql(!showSidebarGraphql)}
         >Graphql</div>
         {showSidebarGraphql&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarGraphql(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Graphql</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
        </div>
        </div>

        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col  mt-[-130px] mr-[300px] '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-green-400  cursor-pointer z-40' 
        onClick={() => setShowSidebarJwt(!showSidebarJwt)}>
          Jwt</div>
          {showSidebarJwt&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarJwt(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Jwt</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-green-400 cursor-pointer z-40'
        onClick={() => setShowSidebarBasicAuth(!showSidebarBasicAuth)}>
          Basic Auth</div>
          {showSidebarBasicAuth&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarBasicAuth(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Basic Auth</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-yellow-300 cursor-pointer z-40 ' 
        onClick={() => setShowSidebarBasicAuth(!showSidebarBasicAuth)}>
          Token Auth</div>
          {showSidebarBasicAuth&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarBasicAuth(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Token Auth</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  border-yellow-300  cursor-pointer z-40' 
        onClick={() => setShowSidebarAuth(!showSidebarAuth)}>
           Auth</div>
           {showSidebarAuth&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarAuth(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Auth</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
        </div>
        <div>
        <div className="flex flex-col ">
  <div className="flex">
        <div className='p-2 border-2 rounded-xl mt-[-18px] mr-[170px] cursor-pointer z-40'
         onClick={() => setShowSidebarAuthenticationAPIs(!showSidebarAuthenticationAPIs)}>
          Authentication APIs</div>
          {showSidebarAuthenticationAPIs&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">APIs</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarAuthenticationAPIs(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      API authentication is a combination of technology and process that proves
       or verifies the identities of users who want access to an API. Specifically, 
       API authentication involves the use of a software protocol to verify that users 
       are who they claim to be when a client makes an API call.



      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        </div>
   

        <div className='flex flex-row '> 
        <div>
        <div className="flex flex-col ">
  <div className="flex">
          <div className='p-2 border-2 rounded-xl mt-[25px] ml-[425px] cursor-pointer z-40' 
          onClick={() => setShowSidebarCaching(!showSidebarCaching)}>
            Caching</div>
            {showSidebarCaching&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Caching</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarCaching(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      Caching is a technique used in computing to store frequently accessed
       data temporarily in order to reduce access time and improve overall system 
       performance. It involves storing copies of data locally so that future requests 
       for that data can be served more quickly




      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        <div className='flex flex-col    '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  ml-[325px] mb-12 mt-[-16px] cursor-pointer z-40 '
        onClick={() => setShowSidebarCDN(!showSidebarCDN)}>
          CDN</div>
          {showSidebarCDN&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarCDN(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>CDN</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-[325px] border-yellow-300 cursor-pointer z-40'
        onClick={() => setShowSidebarClientSide(!showSidebarClientSide)}>
          Client Side</div>
          {showSidebarClientSide&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarClientSide(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Client Side</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
        </div>
        </div>

        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col mt-[-55px] mr-[190px] '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-4 border-yellow-300  cursor-pointer z-40'
        onClick={() => setShowSidebarBcrypt(!showSidebarBcrypt)}>
          Bcrypt</div>
          {showSidebarBcrypt&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarBcrypt(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Bcrypt</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-4 border-green-400 cursor-pointer z-40'
        onClick={() => setShowSidebarScrypt(!showSidebarScrypt)}>
          Scrypt</div>
          {showSidebarScrypt&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarScrypt(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Scrypt</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-4 border-yellow-300 cursor-pointer z-40' 
        onClick={() => setShowSidebarHttps(!showSidebarHttps)}>
          HTTPS</div>
          {showSidebarHttps&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarHttps(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Https</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-4 border-yellow-300 cursor-pointer z-40'
         onClick={() => setShowSidebarCors(!showSidebarCors)}>
          Cors</div>
          {showSidebarCors&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarCors(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Cors</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl cursor-pointer z-40 '
         onClick={() => setShowSidebarServerSecurity(!showSidebarServerSecurity)}>
          Server Security</div>
          {showSidebarServerSecurity&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarServerSecurity(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Server Security</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
        </div>
        <div>
        <div className="flex flex-col ">
  <div className="flex">
        <div className='p-2 border-2 rounded-xl mt-[65px] mr-[90px] cursor-pointer z-40'
        onClick={() => setShowSidebarWebSecurity(!ShowSidebarWebSecurity)}>
          Web Security</div>
          {ShowSidebarWebSecurity&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Web Security</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarWebSecurity(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      Web security encompasses various practices, technologies, and
       measures implemented to protect websites, web applications, 
       and web services from threats and vulnerabilities. It involves 
       safeguarding sensitive data, preventing unauthorised access, 
       ensuring data integrity, and maintaining user privacy.
      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        </div>

        <div className='flex flex-row '> 
        <div>
        <div className="flex flex-col ">
  <div className="flex">
          <div className='p-2 border-2 rounded-xl mt-[-2px] ml-[440px] cursor-pointer z-40' 
           onClick={() => setShowSidebarTesting(!showSidebarTesting)}>
            Testing</div>
            {showSidebarTesting&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Testing </div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarTesting(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      Testing is the process of evaluating a system or its components to 
      verify that it meets specified requirements and works as expected. 
      It involves executing a program or application with the intent of finding
       errors and ensuring its quality. Testing is crucial for identifying defects
        early in the development cycle, reducing the cost of fixing them, and ensuring
         the reliability and performance of the software.

      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
<div className='flex flex-col  '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  ml-[250px] mb-4 mt-[-120px] border-yellow-300 cursor-pointer z-40 text-center h-[45px]'
        onClick={() => setShowSidebarUnitTesting(!showSidebarUnitTesting)}>
          Unit Testing</div>
          {showSidebarUnitTesting&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarUnitTesting(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Unit Testing</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className='flex flex-col  '>
        <div className="flex flex-col ">
        <div className=' p-2 border-2 rounded-xl ml-[250px] mb-4 border-yellow-300  cursor-pointer z-40 mt-[-60px] text-center'
        onClick={() => setShowSidebarIntergrationTesting(!showSidebarIntegrationTesting)}>
          Integration Testing</div>
          {showSidebarIntegrationTesting&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarIntergrationTesting(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Integration Testing</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-[250px] mb-4 cursor-pointer z-40 text-center'
         onClick={() => setShowSidebarContinous(!showSidebarContinous)} >
          Continous<br/> Integration/Continous <br/>Deployment</div>
          {showSidebarContinous&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarContinous(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Continous Integration/Continous Deployment</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
        </div>
        </div>

        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col mt-[-8px] mr-[320px] '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-yellow-300 cursor-pointer z-40 text-center'
        onClick={() => setShowSidebarDatabaseIndexes(!showSidebarDatabaseIndexes)} >
          Database Indexes</div>
          {showSidebarDatabaseIndexes&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarDatabaseIndexes(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Database Indexes</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 cursor-pointer z-40 '
        onClick={() => setShowSidebarCapTheorem(!showSidebarCapTheorem)} > 
        Cap Theorem</div>
        {showSidebarCapTheorem&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarCapTheorem(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Cap Theorem</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl cursor-pointer z-40  '
        onClick={() => setShowSidebarShardingStrategies(!showSidebarShardingStrategies)} >  
        Sharding Strategies</div>
        {showSidebarShardingStrategies&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarShardingStrategies(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Sharding Strategies</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
        </div>
        <div>
        <div className="flex flex-col ">
  <div className="flex">
        <div className='p-2 border-2 rounded-xl mt-[56px] mr-[250px] cursor-pointer z-40'
        onClick={() => setShowSidebarScalingDatabase(!showSidebarScalingDatabase)} > 
         Scaling Database</div>
         {showSidebarScalingDatabase&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Scaling Database </div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarScalingDatabase(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      Scaling a database refers to the process of increasing its capacity 
      to handle more data, requests, and users as the application grows. 
      Scaling can be done vertically by adding more resources to a single 
      server (like increasing CPU, RAM, or storage), or horizontally by 
      distributing the workload across multiple servers.

      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        </div>

        <div className='flex flex-row '> 
        <div>
        <div className="flex flex-col ">
  <div className="flex">
          <div className='p-2 border-2 rounded-xl mt-[54px] ml-[280px] cursor-pointer z-40' 
          onClick={() => setShowSidebarWebServers(!showSidebarWebServers)} >
            Web Servers</div>
            {showSidebarWebServers&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Web Servers</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarWebServers(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      A web server is a software application that serves web pages to 
      clients over the internet or an intranet. It processes requests
       from clients (usually web browsers) and returns the requested 
       web pages along with any associated resources, such as images, 
       scripts, and stylesheets. Web servers use various protocols, 
       such as HTTP and HTTPS, to communicate with clients and deliver web content.


      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        <div className='flex flex-col  '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  ml-[195px] mb-4 mt-[-15px] cursor-pointer z-40 text-center  '
        onClick={() => setShowSidebarNginx(!showSidebarNginx)} >
          Nginx</div>
          {showSidebarNginx&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarNginx(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Nginx</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-[195px] mb-4 border-yellow-300 text-center cursor-pointer z-40  '
        onClick={() => setShowSidebarApache(!showSidebarApache)} >
          Apache</div>
          {showSidebarApache&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarApache(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Apache</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-[195px] mb-4 border-green-400 text-center cursor-pointer z-40  ' 
        onClick={() => setShowSidebarCaddy(!showSidebarCaddy)} >
          Caddy</div>
        {showSidebarCaddy&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarCaddy(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Caddy</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
        </div>
        </div>


        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col mt-[-20px] mr-[200px] '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-green-400  cursor-pointer z-40  text-center' 
         onClick={() => setShowSidebarServerScent(!showSidebarServerScent)} >
          Server Sent Events</div>
          {showSidebarServerScent&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarServerScent(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Server Sent Events</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-green-400 cursor-pointer z-40  text-center'
         onClick={() => setShowSidebarWebStocks(!showSidebarWebStocks)} >
          Web Sockes</div>
          {showSidebarWebStocks&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarWebStocks(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Web Sockes</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl border-green-400 cursor-pointer z-40  text-center'
        onClick={() => setShowSidebarLongShort(!showSidebarLongShort)} >
          Long and <br/> Short Polling</div>
          {showSidebarLongShort&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarLongShort(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Long and Short Polling</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
        </div>
        <div>
        <div className="flex flex-col ">
  <div className="flex">
        <div className='p-2 border-2 rounded-xl mt-[50px] mr-[135px] cursor-pointer z-40  text-center' 
         onClick={() => setShowSidebarRealtime(!showSidebarRealtime)} >
          Real-Time Data</div>
          {showSidebarRealtime&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Real-Time Data</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarRealtime(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      Real-time data refers to information that is transmitted and received instantly,
       enabling immediate updates or reactions without any significant delay. 
       This type of data communication is crucial for applications where timely 
       information is essential, such as chat applications, live sports updates, 
       stock market tracking, and collaborative editing tools.


      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        </div>

        <div className='p-2 border-2 rounded-xl mt-[35px] ml-2'>Advance Knowledge</div>
      </div>
      <img
  src={backendlogo}
  alt="My Logo"
  style={{ width: '50%', position: 'absolute', zIndex: '10' }} // Set zIndex to control stacking order
  className="mt-12"
/>

    </div>
    </div>
    
    <div className="flex flex-col max-w-[1240px] mx-auto mb-10 mt-40 ">
    <div className='text-3xl ml-4 mb-4 text-white cursor-pointer z-40'>
       Frequently Asked Question</div>
       
<div className="flex flex-col ">
  <div className="flex">
  <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 p z-40 rounded-lg'
   onClick={() => setShowSidebarQs1(!showSidebarQs1)} >
      What are the Job titles of a Backend Developer?
    </div>
    {showSidebarQs1&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50  ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarQs1(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>What are the Job titles of a Backend Developer</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 z-40 rounded-lg'
    onClick={() => setShowSidebarQs2(!showSidebarQs2)} >
      How to become a Backend developer?
    </div>
    {showSidebarQs2&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarQs2(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>How to become a Backend Developer</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 z-40 rounded-lg'
     onClick={() => setShowSidebarQs3(!showSidebarQs3)} >
      What are the backend developer salaries?
    </div>
    {showSidebarQs3&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50  ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarQs3(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>What are the backend developer salaries?</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            
          </div>
    )}
  </div>
</div>

    
</div>

<div className="flex flex-col max-w-[1240px] mx-auto mb-10 ">
    <div className='text-3xl ml-4 mb-4 text-white '> Test your Knowledge</div>
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 rounded-lg'>
      Javascipt
    </div>
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 rounded-lg'>
      Mysql
    </div>
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 rounded-lg'>
      Rest
    </div>

    
</div>

    <div className='w-full border border-[#1E293C] mt-40'></div>
            <div className='bg-[#000000]'>
                <div className='  text-[#94A3B8] h-40  justify-between flex items-center mx-auto max-w-[1240px]'>
                    <div className=''>© Skill Odessey </div>
                </div>
            </div>

    </div>
 

  );
};

export default BackendPage;
