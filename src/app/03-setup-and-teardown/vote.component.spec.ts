import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment totalVotes when upvoted', () => {
    // Triple A structure (Arrange, Act, Assert)
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    //Act
    component.downVote();

    //Assert
    expect(component.totalVotes).toBe(-1);
  });
});
