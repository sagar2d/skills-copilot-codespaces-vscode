function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'skillsMemberController',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}