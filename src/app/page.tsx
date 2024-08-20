import Image from "next/image";
import profilePic from '../../public/profile.jpeg';
import { getBlogs } from "../../data/firebase";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <main className="py-4">
      {/* Main content */}
      <div className="space-y-5">
        {/* profile picture and little desciption */}
        <div className="flex flex-col items-center md:flex-row md:gap-4">
          {/* Profile picture */}
          <div className="md:basis-2/12 md:flex md:justify-end">
            {/* container for image to make fill prop work */}
            <div className="max-h-[250px] w-[150px]">
              <Image src={profilePic} alt="Profile picture" className="rounded-md" priority />
            </div>
          </div>
          <div className="w-full px-4 md:basis-10/12 my-8 space-y-3">
            <h1 className="text-2xl font-semibold">Mustafa Dağkıranlar</h1>
            <p>I am a software engineer and Project Manager in Caretta Robotics in Cyprus.</p>
            <p>In 2024, I graduated from the software engineering program at Eastern Mediterranean University in Cyprus. Currently, I am pursuing a master&apos;s degree in computer engineering with a specialization in artificial intelligence at the same university.</p>
            <p>Professionaly I am working on robotics, artificial intelligence, machine learning and computer vision. More about what I have done and where I have been is in my <a href="#" className="text-primary">CV</a> </p>
          </div>
        </div>
        {/* contact */}
        <div className="md:flex md:flex-row px-4 md:gap-4">
          <div className="md:basis-2/12 my-4 md:flex md:justify-end">
            <p className="font-semibold text-2xl">Contact</p>
          </div>
          <div className="md:basis-10/12">
            <ul className="space-y-3">
              <li><a href="mailto:dagkiranlar.m@gmail.com" className="text-primary">Email:</a> dagkiranlar at gmail.com</li>
              <li><a href="mailto:mustafa.dagkiranlar@carettarobotics.com" className="text-primary">Work Email:</a> mustafa.dagkiranlar at carettarobotics.com</li>
            </ul>
          </div>
        </div>
        {/* activities */}
        <div className="md:flex md:flex-row px-4 md:gap-4">
          <div className="md:basis-2/12 my-4 md:flex md:justify-end">
            <p className="font-semibold text-2xl my-4">Activities</p>
          </div>
          <div className="md:basis-10/12">
            <ul className="space-y-3">
              <li>Project Manager & Software Developer @ Carett Robotics</li>
              <li>Kids robotics classes instructor @ Cyprus, Iskele Municipality</li>
              <li>Entrepreneur...</li>
            </ul>
          </div>
        </div>

        {/* Blog */}
        <div className="md:flex md:flex-row px-4 md:gap-4">
          <div className="md:basis-2/12 my-4 md:flex md:justify-end">
            <p className="font-semibold text-2xl my-4">My Blog</p>
          </div>
          <div className="md:basis-10/12 md:flex md:flex-col md:justify-center">
            <ul className="space-y-3">
              {blogs.map(async (blog) => (
                <li key={blog.id.toString()}>
                  <p className="font-semibold text-lg">{blog.title}</p>
                  <p>{blog.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
