import { Separator } from '~/components/ui/separator'
import { useThemeContext } from '~/hooks/useTheme'
import { H2 } from './ui/typography'
export default function UsesSection() {
  const { systemTheme, setTheme } = useThemeContext()
  const UsesItem = ({ title, description }: any) => {
    return (
      <div>
        <h3
          className=""
          style={{
            color: systemTheme.text.accent,
          }}
        >
          {title}
        </h3>
        <p
          className=" text-sm"
          style={{
            color: systemTheme.text.accent2,
          }}
        >
          {description}
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-8">
        <div
          className="w-full grid-cols-2 gap-12 space-y-4 border-b pb-12 md:grid md:space-y-0"
          style={{
            borderColor: systemTheme.text.accent2,
          }}
        >
          <H2>Office</H2>
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
            <UsesItem
              title="Custom Desktop PC"
              description="
              Intel i7-9700K | 32 Gig RAM"
            />
            <UsesItem
              title="Focusrite Scarlett 2i2"
              description="2nd generation"
            />
            <UsesItem
              title="Rama Works Thermal"
              description="Gateron Quinn, GMK WoB"
            />
            <UsesItem
              title="Logitech MX Ergo Plus"
              description="Trackball Mouse"
            />
          </div>
        </div>

        <div
          className="w-full grid-cols-2 gap-12 space-y-4 border-b pb-12 md:grid md:space-y-0"
          style={{
            borderColor: systemTheme.text.accent2,
          }}
        >
          <H2>Programming</H2>
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
            <UsesItem
              title="Visual Studio Code"
              description="GitHub Dark theme"
            />
            <UsesItem title="React" description="Javascript framework" />
            <UsesItem title="Next.js" description="React framework" />
            <UsesItem title="Tailwind CSS" description="CSS framework" />
            <UsesItem title="Vercel" description="Project deployment" />
            <UsesItem title="GitHub" description="Version control" />
            <UsesItem title="Supabase" description="Open Source Database" />
          </div>
        </div>

        <div
          className="w-full grid-cols-2 gap-12 space-y-4 border-b pb-12 md:grid md:space-y-0"
          style={{
            borderColor: systemTheme.text.accent2,
          }}
        >
          <H2>Tennis</H2>
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
            <UsesItem
              title="Yonex Percept 97"
              description="310g | 16x19 | 97 sq in | 6th gen | lead at 3 & 9 & 12 | leather grip | wilson pro overgrip"
            />
          </div>
        </div>

        <div
          className="w-full grid-cols-2 gap-12 space-y-4  pb-12 md:grid md:space-y-0"
          style={{
            borderColor: systemTheme.text.accent2,
          }}
        >
          <H2>Every Day Carry</H2>
          <div className="grid w-full grid-cols-2  gap-4 sm:grid-cols-3">
            <UsesItem title="Seiko 62Mas" description="37mm diver watch" />
          </div>
        </div>
      </div>
    </>
  )
}
