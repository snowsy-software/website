import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="dark:bg-bg-color-dark bg-gray-light py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Services"
            paragraph="Apart from Eventies EMS, Snowsy offers a range of services to help your business succeed in the digital age."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
