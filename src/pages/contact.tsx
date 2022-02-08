import NextLink from "next/link";
import Layout from '~/components/ui/Layout'
import ContactLink from '~/components/contact/ContactLink'
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <div className="">
        <h2 className=" text-2xl dark:text-gray-200 font-bold font-mono text-gray-700 text-left mb-8">
         
        </h2>
        <div className="">
          <ul className="flex flex-col font-semi-bold ">
            <ContactLink href="mailto:thienjsx@gmail.com" title="gmail" icon="thienjsx" />
            <ContactLink href="https://github.com/thienjs" title="github" icon="thienjs"/>
            <ContactLink href="https://twitter.com/thientsx" title="twitter" icon="thientsx" />
          </ul>
        </div>

        <br />
      </div>
    </Layout>
  );
};


export default Contact;