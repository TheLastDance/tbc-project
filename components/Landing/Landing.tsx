import "./Landing.css"
import { Card } from "../Card/Card"
import Image from "next/image"
import android_1 from "@/public/img/products/android-1.jpeg"
import android_2 from "@/public/img/products/android-2.jpeg"
import android_3 from "@/public/img/products/android-3.jpeg"
import { Heading } from "../UI/GlitchEffects/Heading/Heading"
import { GlithHoverLink } from "../UI/Links/GlithHoverLink"
import { MotionDiv } from "../MotionDiv/MotionDiv"
import { TranslateTextServer } from "../TranslateText/TranslateTextServer"
import { animation } from "@/services/animations";


export function Landing() {
  return (
    <div className="landing_container">
      <MotionDiv
        initial="hidden"
        whileInView='visible'
        viewport={{ once: true }}
        variants={animation}
        className="landing landing-1"
      >
        <Card>
          <Image src={android_1} width={900} height={1200} alt="landing android" priority placeholder="blur" />
        </Card>
        <div className="landing-info">
          <h3>
            <Heading>FUTURE</Heading>
          </h3>
          <h5><TranslateTextServer translationKey="landing.h5.1" /></h5>
          <p>
            <TranslateTextServer translationKey="landing.paragraph.1" />
          </p>
          <GlithHoverLink href="/products" translationKey="landing.button.1" />
        </div>
      </MotionDiv>
      <MotionDiv
        initial="hidden"
        whileInView='visible'
        viewport={{ once: true }}
        variants={animation}
        className="landing landing-2"
      >
        <div className="landing-info">
          <h3>
            <Heading>IS</Heading>
          </h3>
          <h5><TranslateTextServer translationKey="landing.h5.2" /></h5>
          <p>
            <TranslateTextServer translationKey="landing.paragraph.2" />
          </p>
          <GlithHoverLink href="/blog" translationKey="landing.button.2" />
        </div>
        <Card>
          <Image src={android_2} width={900} height={1200} alt="landing android" priority placeholder="blur" />
        </Card>
      </MotionDiv>
      <MotionDiv
        initial="hidden"
        whileInView='visible'
        viewport={{ once: true }}
        variants={animation}
        className="landing landing-3"
      >
        <Card>
          <Image src={android_3} width={900} height={1200} alt="landing android" priority placeholder="blur" />
        </Card>
        <div className="landing-info">
          <h3>
            <Heading>HERE</Heading>
          </h3>
          <h5><TranslateTextServer translationKey="landing.h5.3" /></h5>
          <p>
            <TranslateTextServer translationKey="landing.paragraph.3" />
          </p>
          <GlithHoverLink href="/contact" translationKey="landing.button.3" />
        </div>
      </MotionDiv>
    </div>
  )
}
