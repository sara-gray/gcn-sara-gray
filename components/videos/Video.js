import Image from 'next/image'
import logo from '../../public/gcnAssets-master/GCNLogoTxtRed.svg'

const Video = ({ video }) => {
  const { _id, title, publishDate } = video

  const getAReadableDate = (date) => {
    let readableDate = new Date(date)
    return readableDate.toDateString()
  }

  return (
    <section key={_id} className='w-full h-full p-2'>
      <img
        alt="GCN Image"
        src={`https://img.youtube.com/vi/${_id}/mqdefault.jpg`}
        layout="intrinsic"
        width={360}
        height={200}
      />

      <p className='font-bold'>{getAReadableDate(publishDate)}</p>
      <p className='text-lg'>{title}</p>
    </section>
  )
}

export default Video