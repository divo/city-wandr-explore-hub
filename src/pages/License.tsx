import Footer from "@/components/Footer";

const License = () => {
  return (
    <div className="min-h-screen bg-peach-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-semibold text-teal-900 mb-8 text-center">Content Licensing</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-teal max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-teal-900 mb-4">Creative Commons License</h2>
              <p className="text-teal-900/80 mb-4">
                The content in City Wandr is available under the Creative Commons Attribution-ShareAlike License (CC BY-SA 3.0). This means you are free to:
              </p>
              <ul className="list-disc pl-6 text-teal-900/80 space-y-2">
                <li>Share — copy and redistribute the material in any medium or format</li>
                <li>Adapt — remix, transform, and build upon the material for any purpose</li>
              </ul>
              <p className="text-teal-900/80 mt-4">
                Under the following terms:
              </p>
              <ul className="list-disc pl-6 text-teal-900/80 space-y-2 mt-2">
                <li>Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made</li>
                <li>ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-teal-900 mb-4">Content Sources</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">Wikipedia and WikiVoyage Content</h3>
                  <p className="text-teal-900/80">
                    Some of the content in this app is derived from Wikipedia and/or WikiVoyage and is available under the Creative Commons Attribution-ShareAlike License (CC BY-SA 3.0) and/or the GNU Free Documentation License. The text has been modified from its original form. For more details, please visit Wikipedia or WikiVoyage.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">Design Assets</h3>
                  <p className="text-teal-900/80">
                    City Stamp designs are provided by Freepik.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">Images</h3>
                  <p className="text-teal-900/80">
                    Images are provided by Pixabay, available under the Pixabay License.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-teal-900 mb-4">User-Generated Content</h2>
              <p className="text-teal-900/80">
                When you submit content to City Wandr (including reviews, photos, and tips), you agree to license it under the same CC BY-SA 3.0 license. This ensures that all content in the app remains freely accessible and shareable under the same terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-900 mb-4">Contact</h2>
              <p className="text-teal-900/80">
                For questions about licensing or to request permission for uses not covered by these terms, please contact us at support@citywandr.com
              </p>
              <p className="text-teal-900/80 mt-4">
                For more information about the CC BY-SA 3.0 license, visit: <a href="https://creativecommons.org/licenses/by-sa/3.0/" className="text-teal-600 hover:text-teal-700 underline">Creative Commons</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default License; 