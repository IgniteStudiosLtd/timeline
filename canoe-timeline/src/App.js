import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <Chrono
      items={[
        {
          title: "2010",
          cardTitle: "Kawainui",
        },
        {
          title: "2010",
          cardTitle: "Kapaʻa",
        },
        {
          title: "2011",
          cardTitle: "Haʻupu",
        },
        {
          title: "2012?",
          cardTitle: "Kaʻapahu",
        },
        {
          title: "2012",
          cardTitle: "Kamanu",
        },
        {
          title: "2013",
          cardTitle: "Kamakahiapo",
        },
        {
          title: "2014",
          cardTitle: "Nānāmua",
          media: {
            name: "nanamua",
            source: {
              url: "https://vimeo.com/99223552",
            },
            type: "VIDEO",
          },
          cardSubtitle: `Unlimited OC6`,
          cardDetailedText: `Nanahope was designed to be an all around performance canoe. It's great in flat water, upwind and downwind. It's well suited for medium to light crews due to a relatively long and narrow waterline. It has aluminum iako and through bolt rigging. The construction is all carbon, epoxy, and foam core. The hull weight is approximately 205 lbs. It's painted white with Awlgrip Marine Paint.

          We believe it's one of our best canoes to date and will remain competitive for years to come.`,
        },
        {
          title: "2014",
          cardTitle: "Nānāhope",
          media: {
            name: "nanahope",
            source: {
              url: "https://i.imgur.com/lq3MaKJ.jpg",
            },
            type: "IMAGE",
          },
          cardSubtitle: `Unlimited OC6`,
          cardDetailedText: `Nanahope was designed to be an all around performance canoe. It's great in flat water, upwind and downwind. It's well suited for medium to light crews due to a relatively long and narrow waterline. It has aluminum iako and through bolt rigging. The construction is all carbon, epoxy, and foam core. The hull weight is approximately 205 lbs. It's painted white with Awlgrip Marine Paint.

          We believe it's one of our best canoes to date and will remain competitive for years to come.`,
        },
        {
          title: "2014",
          cardTitle: "ʻElepaio",
          media: {
            name: "ʻElepaio",
            source: {
              url: "https://storage.googleapis.com/b.kamanucomposites.com/static/images/www/cover-elepaio-mobile.jpg",
            },
            type: "IMAGE",
          },
          cardSubtitle: `Unlimited OC6`,
          cardDetailedText: `‘Elepaio is our latest unlimited V6 canoe and a design that we’re going to go into production with. In designing ‘Elepaio, we’ve prioritized overall speed, surfing ability, steering control, and comfort. We’re super excited to share it with the world.`,
        },
      ]}
      mode="VERTICAL"
    />
  );
};

export default Timeline;
