
import VotingSection from "../components/debatepage/votingSection"
import CommentSection from "../components/debatepage/commentsection"
import PostSection from "../components/debatepage/commentpost"
import AIChatModal from "../components/AIChatModal";





const commentSectionMock = [
  {
    _id: '1232',
    imgLink: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    fullName: 'Michael Michael',
    comment: "hello",
    replies: [{
      _id: '12df3',
      fullName: "chris chris",
      message: 'this is great',
      relativeTime: "posted 1 minute ago"
    }, {
      _id: '12sdf3',
      fullName: "spencer spencer",
      message: 'this is terrible!',
      relativeTime: "posted 2 hours ago"
    }]
  },
  {
    _id: '123xcvxc',
    imgLink: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    fullName: 'Wayne Wayne',
    comment: "hi this is my comment",
    replies: [{
      _id: '1xcvxc23',
      fullName: "gerson",
      message: 'this is awesome',
      relativeTime: "posted 6 minutes ago"
    }]
  }
]

export default function DebatePage() {
 

  return (
    <>

      <VotingSection />
      <PostSection />
      <CommentSection comments={commentSectionMock} />
      <AIChatModal />


    </>
  )
}