// components
import MrImg from "./MrImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  { icon: <User2 size={20} />, text: "Ehsan Fakhri" },
  { icon: <PhoneCall size={20} />, text: "+012 346 6789" },
  { icon: <MailIcon size={20} />, text: "youremail@mail.com" },
  { icon: <Calendar size={20} />, text: "Born on 11 May, 1990" },
  { icon: <GraduationCap size={20} />, text: "Master on Computer Science" },
  { icon: <HomeIcon size={20} />, text: "321 Blue Avenue, NY, USA" },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Example University",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Another University",
        qualification: "Master of Arts",
        years: "2019 - 2021",
      },
      {
        university: "Yet Another University",
        qualification: "ph.D in Computer Science",
        years: "2021 - 2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "ABC Inc",
        qualification: "software Engineer",
        years: "2018 - 2020",
      },
      {
        company: "XYZ Corporation",
        qualification: "Senior Developer",
        years: "2020 - 2022",
      },
      {
        company: "Tech Innovators",
        qualification: "Lead developer",
        years: "2022 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, react",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

type IQualificationData =
  | {
      title: string;
      data: {
        university: string;
        qualification: string;
        years: string;
      }[];
    }
  | {
      title: string;
      data: {
        company: string;
        qualification: string;
        years: string;
      }[];
    }
  | undefined;

const About = () => {
  const getData = (
    arr: IQualificationData[],
    title: string
  ): IQualificationData => {
    return arr.find((item) => item?.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <MrImg
              containerStyle="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs contents */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting in intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experience
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Frwnch, Spanish, Italian</div>
                    </div>
                  </div>
                  {/* qualifications */}
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3>My Awesome Journey</h3>
                    {/* experience & education Wrapper */}
                    <div>
                      {/* experience */}
                      <div>
                        <div>
                          <Briefcase />
                          <div>
                            {getData(qualificationData, "experience")?.title}
                          </div>
                        </div>
                      </div>

                      {/* education */}
                      <div>education</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
