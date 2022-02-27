/* eslint-disable jsx-a11y/alt-text */
import hm1 from "../Images/Rectangle3.png";
import hm2 from "../Images/Rectangle4.png";
import hm3 from "../Images/Rectangle5.png";
import N1 from "../Images/N1.png";
import N2 from "../Images/N2.png";
import N3 from "../Images/N3.png";
import N4 from "../Images/N4.png";

const emojipedia = [
  {
    id: 1,
    type: "✍️ Article",
    image: <img src={hm1} className="hm1" />,
    name: <span className="d-div">Sarthak Kamra</span>,
    heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      " I’ve worked in UX for the better part of a decade. From now on, I plan  to rei…",
    nameimg: <img className="N1" src={N1}></img>,
  },
  {
    id: 2,
    type: "🔬️ Education",
    image: <img src={hm2} className="hm2" />,
    name: <span className="d-div">Sarah West</span>,
    heading:
      " Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      " I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    nameimg: <img className="N2" src={N2}></img>,
  },
  {
    id: 3,
    type: "🗓️ Meetup",
    image: <img src={hm3} className="hm3" />,
    name: "Ronal Jones",
    heading: "Finance & Investment Elite Social Mixer @Lujiazui",
    nameimg: <img className="N3" src={N3}></img>,
    loc: <div className="l1"></div>,
    stamp: <div className="s1"></div>,
  },
  {
    id: 4,
    type: "💼️ Job",
    name: "Joseph Gray",
    heading: "Software Developer",
    nameimg: <img className="N4" src={N4}></img>,
    loc: <div className="l2"></div>,
    stamp: <div className="s2"></div>,
  },
];

export default emojipedia;
