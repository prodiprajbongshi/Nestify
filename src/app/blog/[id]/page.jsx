import Image from "next/image";

export default function Page({ params }) {
  const { id } = params;

  return (
    <div className="container max-w-4xl mx-auto py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog Title #{id}</h1>

      {/* Meta Info */}
      <div className="text-gray-500 mb-6">
        <p>Published on: 20 June 2025</p>
      </div>

      {/* Featured Image */}
      <div className="w-full h-[300px] relative mb-8">
        <Image
          src="/blog/blog.png"
          alt="Blog Image"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc sit amet varius cursus, justo erat ultricies sapien, vel tempor
          nisi risus vel felis.
        </p>

        <p>
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
          nisi. Nulla quis sem at nibh elementum imperdiet.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Subheading</h2>

        <p>
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
          semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600">
          "This is a sample quote inside the blog content to make it look more
          realistic."
        </blockquote>

        <p>
          Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
          Curabitur tortor. Pellentesque nibh. Aenean quam.
        </p>
      </div>
    </div>
  );
}
