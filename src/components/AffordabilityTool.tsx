import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Home, TrendingUp, PieChart, HelpCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const AffordabilityTool = () => {
  const [income, setIncome] = useState(80000);
  const [downPayment, setDownPayment] = useState(20);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [creditScore, setCreditScore] = useState([720]);
  const [results, setResults] = useState(null);

  const calculateAffordability = () => {
    const monthlyIncome = income / 12;
    const maxMonthlyPayment = (monthlyIncome * 0.28) - monthlyDebts;
    const interestRate = creditScore[0] >= 740 ? 0.065 : creditScore[0] >= 680 ? 0.07 : 0.075;
    const monthlyRate = interestRate / 12;
    const numPayments = 30 * 12;
    
    // Calculate max loan amount using payment formula
    const maxLoanAmount = maxMonthlyPayment * (1 - Math.pow(1 + monthlyRate, -numPayments)) / monthlyRate;
    const maxHomePrice = maxLoanAmount / (1 - downPayment / 100);
    
    setResults({
      maxHomePrice: Math.round(maxHomePrice),
      maxMonthlyPayment: Math.round(maxMonthlyPayment),
      maxLoanAmount: Math.round(maxLoanAmount),
      downPaymentAmount: Math.round(maxHomePrice * (downPayment / 100)),
      interestRate: (interestRate * 100).toFixed(2)
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            <Calculator className="w-4 h-4 mr-2" />
            Affordability Calculator
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Much Can You Afford?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get an accurate estimate of your home buying budget with our AI-powered affordability calculator
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <Card className="p-8 bg-gradient-card">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Home className="w-5 h-5" />
              Your Financial Information
            </h3>

            <div className="space-y-6">
              {/* Annual Income */}
              <div>
                <Label htmlFor="income" className="text-sm font-medium text-foreground">
                  Annual Income
                </Label>
                <div className="relative mt-2">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="income"
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="pl-10"
                    placeholder="80000"
                  />
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <Label className="text-sm font-medium text-foreground flex items-center justify-between">
                  Down Payment Percentage
                  <span className="text-primary font-bold">{downPayment}%</span>
                </Label>
                <div className="mt-2">
                  <Slider
                    value={[downPayment]}
                    onValueChange={(value) => setDownPayment(value[0])}
                    max={30}
                    min={3}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>3%</span>
                    <span>30%</span>
                  </div>
                </div>
              </div>

              {/* Monthly Debts */}
              <div>
                <Label htmlFor="debts" className="text-sm font-medium text-foreground">
                  Monthly Debts (credit cards, loans, etc.)
                </Label>
                <div className="relative mt-2">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="debts"
                    type="number"
                    value={monthlyDebts}
                    onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                    className="pl-10"
                    placeholder="500"
                  />
                </div>
              </div>

              {/* Credit Score */}
              <div>
                <Label className="text-sm font-medium text-foreground flex items-center justify-between">
                  Credit Score
                  <span className="text-primary font-bold">{creditScore[0]}</span>
                </Label>
                <div className="mt-2">
                  <Slider
                    value={creditScore}
                    onValueChange={setCreditScore}
                    max={850}
                    min={300}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>300</span>
                    <span>850</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={calculateAffordability}
                className="w-full btn-primary"
                size="lg"
              >
                Calculate Affordability
              </Button>
            </div>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {results ? (
              <>
                {/* Main Result */}
                <Card className="p-8 bg-gradient-primary text-white">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      ${results.maxHomePrice.toLocaleString()}
                    </div>
                    <div className="text-white/90 text-lg">Maximum Home Price</div>
                  </div>
                </Card>

                {/* Breakdown */}
                <Card className="p-8">
                  <h4 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <PieChart className="w-5 h-5" />
                    Breakdown
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Monthly Payment</span>
                      <span className="font-semibold text-foreground">${results.maxMonthlyPayment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Loan Amount</span>
                      <span className="font-semibold text-foreground">${results.maxLoanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Down Payment</span>
                      <span className="font-semibold text-foreground">${results.downPaymentAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">Interest Rate</span>
                      <span className="font-semibold text-foreground">{results.interestRate}%</span>
                    </div>
                  </div>
                </Card>

                {/* AI Insights */}
                <Card className="p-6 bg-primary-soft">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">AI Recommendation</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Based on your financial profile, consider focusing on homes in the ${Math.round(results.maxHomePrice * 0.8).toLocaleString()} - ${results.maxHomePrice.toLocaleString()} range to ensure comfortable monthly payments and emergency fund maintenance.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Next Steps */}
                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Next Steps</h4>
                  <div className="space-y-3">
                    <Button className="w-full btn-primary">
                      Get Pre-Approved
                    </Button>
                    <Button variant="outline" className="w-full">
                      Find Agents in Your Budget
                    </Button>
                    <Button variant="ghost" className="w-full">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Schedule Consultation
                    </Button>
                  </div>
                </Card>
              </>
            ) : (
              <Card className="p-12 text-center">
                <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Ready to Calculate?
                </h3>
                <p className="text-muted-foreground">
                  Fill in your financial information and get an instant affordability estimate
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};