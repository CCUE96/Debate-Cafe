
import VotingSection from "../components/debatepage/votingSection"
import CommentSection from "../components/debatepage/commentsection"
import PostSection from "../components/debatepage/commentpost"
import AIChatModal from "../components/AIChatModal";
import Auth from "../utils/auth"







export default function DebatePage() {
  Auth.ensureAuthenticatedAccess();


  return (
    <>

      <VotingSection />
      <PostSection />
      <CommentSection  />
      <AIChatModal />


    </>
  )
}