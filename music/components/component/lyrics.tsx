/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/RIaFdWL1rFD
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Lyrics() {
  return (
    <main className="w-full min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-md shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">Submit Lyrics</h1>
        <p className="text-gray-600 mb-6">Enter Song Details</p>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="font-medium text-gray-700" htmlFor="song-name">
              Song Name
            </Label>
            <Input
              className="w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 text-base"
              id="song-name"
              placeholder="Enter song name"
            />
          </div>
          <div className="space-y-2">
            <Label className="font-medium text-gray-700" htmlFor="artist-name">
              Artist Name
            </Label>
            <Input
              className="w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 text-base"
              id="artist-name"
              placeholder="Enter artist name"
            />
          </div>
          <div className="flex justify-center">
            <Button className="w-50 bg-green-600 hover:bg-green-800 text-white font-medium py-2 rounded-md animate-bounce">
              Generate Lyrics
            </Button>
          </div>
          <div className="space-y-2">
            <Label className="font-medium text-gray-700" htmlFor="lyrics">
              Lyrics
            </Label>
            <Textarea
              className="w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 text-base min-h-[200px]"
              id="lyrics"
              placeholder="Enter lyrics"
            />
          </div>
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md">
            Submit
          </Button>
        </div>
      </div>
    </main>
  )
}