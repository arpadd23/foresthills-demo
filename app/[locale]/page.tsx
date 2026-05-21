import {setRequestLocale} from 'next-intl/server';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Hero} from '@/components/sections/Hero';
import {InquiryWidget} from '@/components/sections/InquiryWidget';
import {Story} from '@/components/sections/Story';
import {ThreePillars} from '@/components/sections/ThreePillars';
import {CourseStats} from '@/components/sections/CourseStats';
import {GalleryPreview} from '@/components/sections/GalleryPreview';
import {LocationContact} from '@/components/sections/LocationContact';

type Props = {
  params: Promise<{locale: string}>;
};

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <InquiryWidget />
        <Story />
        <ThreePillars />
        <CourseStats />
        <GalleryPreview />
        <LocationContact />
      </main>
      <Footer />
    </>
  );
}
