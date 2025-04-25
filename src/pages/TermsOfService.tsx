import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Separator } from '@/components/ui/separator';
import AnimatedGradient from '@/components/AnimatedGradient';

const TermsOfService = () => {
  return (
    <MainLayout>
      <AnimatedGradient 
        size="xl" 
        animation="flow" 
        intensity="medium" 
        className="top-0 right-0 translate-x-1/2 -translate-y-1/2" 
      />
      
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-heritage-700">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last Updated: April 01, 2025</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-heritage-600">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing or using the Red Sun Capital, LLC website ("https://www.redsuncapital.com") ("the Website"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <Separator className="my-6" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-heritage-600">2. Use License</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Permission is granted to temporarily view the materials (information or software) on Red Sun Capital, LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Modify or copy the materials;</li>
                  <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                  <li>Attempt to decompile or reverse engineer any software contained on Red Sun Capital, LLC's website;</li>
                  <li>Remove any copyright or other proprietary notations from the materials; or</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
                <p>
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by Red Sun Capital, LLC at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                </p>
              </div>
            </section>

            <Separator className="my-6" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-heritage-600">3. Disclaimer</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-bold">The materials on Red Sun Capital, LLC's website are provided on an 'as is' basis.</span> Red Sun Capital, LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                  <span className="font-bold">Further, Red Sun Capital, LLC does not warrant or make any representations</span> concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </div>
            </section>

            <Separator className="my-6" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-heritage-600">4. Limitations</h2>
              <p className="text-gray-700">
                In no event shall Red Sun Capital, LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Red Sun Capital, LLC's website, even if Red Sun Capital, LLC or a Red Sun Capital, LLC authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <Separator className="my-6" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-heritage-600">5. Accuracy of Materials</h2>
              <p className="text-gray-700">
                The materials appearing on Red Sun Capital, LLC's website could include technical, typographical, or photographic errors. Red Sun Capital, LLC does not warrant that any of the materials on its website are accurate, complete or current. Red Sun Capital, LLC may make changes to the materials contained on its website at any time without notice. However Red Sun Capital, LLC does not make any commitment to update the materials.
              </p>
            </section>

            <Separator className="my-6" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-heritage-600">6. Links</h2>
              <p className="text-gray-700">
                Red Sun Capital, LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Red Sun Capital, LLC of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <Separator className="my-6" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-heritage-600">7. Modifications</h2>
              <p className="text-gray-700">
                Red Sun Capital, LLC may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <Separator className="my-6" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-heritage-600">8. Governing Law</h2>
              <p className="text-gray-700">
                These terms and conditions are governed by and construed in accordance with the laws of Hawaii and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>

            <Separator className="my-6" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-heritage-600">9. Contact Information</h2>
              <p className="mb-2 text-gray-700">
                If you have any questions about these Terms of Service, please contact us at: <a href="mailto:go@redsuncapital.com" className="text-heritage-500 hover:underline">go@redsuncapital.com</a>
              </p>
              <p className="font-medium text-gray-700">Red Sun Capital, LLC</p>
              <p className="text-gray-700">
                91-270 Hanua St Suite 1A<br />
                Kapolei, HI 96707
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsOfService;
