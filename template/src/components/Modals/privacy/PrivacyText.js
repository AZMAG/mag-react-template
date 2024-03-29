import React from "react"

export default function PrivacyText() {
  let noReplyURL = "mailto:no-reply@azmag.gov"
  return (
    <div className="text-sky-900">
      <p className="mb-3">
        MAG Mapping Center is committed to protecting your privacy and developing technology that
        gives you the most powerful and safe online experience. This Statement of Privacy applies to
        the MAG Mapping Center Web site and governs data collection and usage. By using the MAG
        Mapping Center website, you consent to the data practices described in this statement.
      </p>
      <h5 className="text-sky-900 text-xl font-bold mb-1">
        Collection of your Personal Information
      </h5>
      <p className="mb-3">
        MAG Mapping Center collects personally identifiable information, such as your e-mail
        address, name, home or work address or telephone number. MAG Mapping Center also collects
        anonymous demographic information, which is not unique to you, such as your ZIP code, age,
        gender, preferences, interests and favorites.
      </p>
      <p className="mb-3">
        There is also information about your computer hardware and software that is automatically
        collected by MAG Mapping Center. This information can include: your IP address, browser
        type, domain names, access times and referring Web site addresses. This information is used
        by MAG Mapping Center for the operation of the service, to maintain quality of the service,
        and to provide general statistics regarding use of the MAG Mapping Center Web site.
      </p>
      <p className="mb-3">
        Please keep in mind that if you directly disclose personally identifiable information or
        personally sensitive data through MAG Mapping Center public message boards, this information
        may be collected and used by others. Note: MAG Mapping Center does not read any of your
        private online communications.
      </p>
      <p className="mb-3">
        MAG Mapping Center encourages you to review the privacy statements of Web sites you choose
        to link to from MAG Mapping Center so that you can understand how those Web sites collect,
        use and share your information. MAG Mapping Center is not responsible for the privacy
        statements or other content on Web sites outside of the MAG Mapping Center and MAG Mapping
        Center family of Web sites.
      </p>
      <h5 className="text-sky-900 text-xl font-bold mb-1">Use of your Personal Information</h5>
      <p className="mb-3">
        MAG Mapping Center collects and uses your personal information to operate the MAG Mapping
        Center Web site and deliver the services you have requested. MAG Mapping Center also uses
        your personally identifiable information to inform you of other products or services
        available from MAG Mapping Center and its affiliates. MAG Mapping Center may also contact
        you via surveys to conduct research about your opinion of current services or of potential
        new services that may be offered.
      </p>
      <p className="mb-3">
        MAG Mapping Center does not sell, rent or lease its customer lists to third parties. MAG
        Mapping Center may, from time to time, contact you on behalf of external business partners
        about a particular offering that may be of interest to you. In those cases, your unique
        personally identifiable information (e-mail, name, address, telephone number) is not
        transferred to the third party. In addition, MAG Mapping Center may share data with trusted
        partners to help us perform statistical analysis, send you email or postal mail, provide
        customer support, or arrange for deliveries. All such third parties are prohibited from
        using your personal information except to provide these services to MAG Mapping Center, and
        they are required to maintain the confidentiality of your information.
      </p>
      <p className="mb-3">
        MAG Mapping Center does not use or disclose sensitive personal information, such as race,
        religion, or political affiliations, without your explicit consent. MAG Mapping Center keeps
        track of the Web sites and pages our customers visit within MAG Mapping Center, in order to
        determine what MAG Mapping Center services are the most popular. This data is used to
        deliver customized content and advertising within MAG Mapping Center to customers whose
        behavior indicates that they are interested in a particular subject area.
      </p>
      <p className="mb-3">
        MAG Mapping Center Web sites will disclose your personal information, without notice, only
        if required to do so by law or in the good faith belief that such action is necessary to:
        (a) conform to the edicts of the law or comply with legal process served on MAG Mapping
        Center or the site; (b) protect and defend the rights or property of MAG Mapping Center;
        and, (c) act under exigent circumstances to protect the personal safety of users of MAG
        Mapping Center, or the public.
      </p>
      <h5 className="text-sky-900 text-xl font-bold mb-1">Use of Cookies</h5>
      <p className="mb-3">
        The MAG Mapping Center Web site use "cookies" to help you personalize your online
        experience. A cookie is a text file that is placed on your hard disk by a Web page
        server.Cookies cannot be used to run programs or deliver viruses to your computer. Cookies
        are uniquely assigned to you, and can only be read by a web server in the domain that issued
        the cookie to you.
      </p>
      <p className="mb-3">
        One of the primary purposes of cookies is to provide a convenience feature to save you time.
        The purpose of a cookie is to tell the Web server that you have returned to a specific page.
        For example, if you personalize MAG Mapping Center pages, or register with MAG Mapping
        Center site or services, a cookie helps MAG Mapping Center to recall your specific
        information on subsequent visits. This simplifies the process of recording your personal
        information, such as billing addresses, shipping addresses, and so on. When you return to
        the same MAG Mapping Center Web site, the information you previously provided can be
        retrieved, so you can easily use the MAG Mapping Center features that you customized.
      </p>
      <p className="mb-3">
        You have the ability to accept or decline cookies. Most Web browsers automatically accept
        cookies, but you can usually modify your browser setting to decline cookies if you prefer.
        If you choose to decline cookies, you may not be able to fully experience the interactive
        features of the MAG Mapping Center services or Web sites you visit.
      </p>
      <h5 className="text-sky-900 text-xl font-bold mb-1">Security of your Personal Information</h5>
      <p className="mb-3">
        MAG Mapping Center secures your personal information from unauthorized access, use or
        disclosure. MAG Mapping Center secures the personally identifiable information you provide
        on computer servers in a controlled, secure environment, protected from unauthorized access,
        use or disclosure. When personal information (such as a credit card number) is transmitted
        to other Web sites, it is protected through the use of encryption, such as the Secure Socket
        Layer (SSL) protocol.
      </p>
      <h5 className="text-sky-900 text-xl font-bold mb-1">Changes to this Statement</h5>
      <p className="mb-3">
        MAG Mapping Center will occasionally update this Statement of Privacy to reflect company and
        customer feedback. MAG Mapping Center encourages you to periodically review this Statement
        to be informed of how MAG Mapping Center is protecting your information.
      </p>
      <h5 className="text-sky-900 text-xl font-bold mb-1">Contact Information</h5>
      <p className="mb-3">
        MAG Mapping Center welcomes your comments regarding this Statement of Privacy. If you
        believe that MAG Mapping Center has not adhered to this Statement, please contact MAG
        Mapping Center at:{" "}
        <a
          href={noReplyURL}
          className="font-medium text-blue-600 hover:underline"
          aria-label="No Reply URL"
          aria-describedby="contact email"
          title="email link"
          target="_blank"
          rel="noreferrer">
          no-reply@azmag.gov
        </a>
        . We will use commercially reasonable efforts to promptly determine and remedy the problem.
      </p>
    </div>
  )
}
