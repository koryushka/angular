"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var router_1 = require("@angular/router");
var proposal_service_1 = require("./proposal.service");
var ProposalListComponent = (function () {
    function ProposalListComponent(proposalService, router) {
        this.proposalService = proposalService;
        this.router = router;
        this.pageTitle = "Documents Dashboard";
        this.mode = 'Observable';
    }
    ProposalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = Rx_1.Observable.timer(0, 150000);
        timer.subscribe(function () { return _this.getProposals(); });
    };
    ProposalListComponent.prototype.getProposals = function () {
        var _this = this;
        this.proposalService.getProposals()
            .subscribe(function (proposals) { return _this.proposals = proposals; }, function (error) { return _this.errorMessage = error; });
    };
    ProposalListComponent.prototype.goTo = function (proposal) {
        var link = ['/proposals', proposal.id];
        this.router.navigate(link);
    };
    ProposalListComponent.prototype.removeProposal = function (proposal) {
        this.proposalService.removeProposal(proposal.id);
        this.proposals.splice(this.proposals.indexOf(proposal), 1);
    };
    return ProposalListComponent;
}());
ProposalListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proposal-list',
        templateUrl: 'proposal-list.component.html',
        styleUrls: ['proposal-list.component.css'],
        providers: [proposal_service_1.ProposalService]
    }),
    __metadata("design:paramtypes", [proposal_service_1.ProposalService,
        router_1.Router])
], ProposalListComponent);
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map