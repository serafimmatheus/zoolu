"use client";

import React from "react";
import { DashboardSidebar } from "@/app/_components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/app/_components/ui/sidebar";
import { BlurContainer } from "@/app/_components/ui/BlurContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { Textarea } from "@/app/_components/ui/textarea";
import { Switch } from "@/app/_components/ui/switch";
import { useForm } from "react-hook-form";

const Settings: React.FC = () => {
  const profileForm = useForm({
    defaultValues: {
      name: "Pet Shop Exemplo",
      email: "contato@petshopexemplo.com",
      phone: "(11) 98765-4321",
      address: "Av. Paulista, 1000, São Paulo - SP",
      description: "Pet Shop especializado em cuidados para cães e gatos.",
    },
  });

  const notificationsForm = useForm({
    defaultValues: {
      emailNotifications: true,
      smsNotifications: false,
      marketingEmails: true,
      appointmentReminders: true,
    },
  });

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow bg-gray-50">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <DashboardSidebar />
            <div className="flex-1 p-6">
              <h1 className="mb-6 text-2xl font-bold">Configurações</h1>

              <Tabs defaultValue="profile" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="profile">Perfil</TabsTrigger>
                  <TabsTrigger value="notifications">Notificações</TabsTrigger>
                  <TabsTrigger value="security">Segurança</TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <BlurContainer>
                    <Card>
                      <CardHeader>
                        <CardTitle>Informações do Perfil</CardTitle>
                        <CardDescription>
                          Atualize as informações do seu estabelecimento
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Form {...profileForm}>
                          <form className="space-y-4">
                            <FormField
                              control={profileForm.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nome do Estabelecimento</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <FormField
                                control={profileForm.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={profileForm.control}
                                name="phone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Telefone</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={profileForm.control}
                              name="address"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Endereço</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={profileForm.control}
                              name="description"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Descrição</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      {...field}
                                      className="resize-none"
                                      rows={4}
                                    />
                                  </FormControl>
                                  <FormDescription>
                                    Breve descrição do seu estabelecimento.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="flex justify-end">
                              <Button type="submit">Salvar Alterações</Button>
                            </div>
                          </form>
                        </Form>
                      </CardContent>
                    </Card>
                  </BlurContainer>
                </TabsContent>

                <TabsContent value="notifications">
                  <BlurContainer>
                    <Card>
                      <CardHeader>
                        <CardTitle>Preferências de Notificação</CardTitle>
                        <CardDescription>
                          Configure como deseja receber notificações
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Form {...notificationsForm}>
                          <form className="space-y-4">
                            <FormField
                              control={notificationsForm.control}
                              name="emailNotifications"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                  <div className="space-y-0.5">
                                    <FormLabel className="text-base">
                                      Notificações por Email
                                    </FormLabel>
                                    <FormDescription>
                                      Receba atualizações de agendamentos por
                                      email.
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={notificationsForm.control}
                              name="smsNotifications"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                  <div className="space-y-0.5">
                                    <FormLabel className="text-base">
                                      Notificações por SMS
                                    </FormLabel>
                                    <FormDescription>
                                      Receba atualizações de agendamentos por
                                      SMS.
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={notificationsForm.control}
                              name="marketingEmails"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                  <div className="space-y-0.5">
                                    <FormLabel className="text-base">
                                      Emails de Marketing
                                    </FormLabel>
                                    <FormDescription>
                                      Receba dicas e promoções por email.
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={notificationsForm.control}
                              name="appointmentReminders"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                  <div className="space-y-0.5">
                                    <FormLabel className="text-base">
                                      Lembretes de Agendamento
                                    </FormLabel>
                                    <FormDescription>
                                      Receba lembretes dos seus próximos
                                      agendamentos.
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />

                            <div className="flex justify-end">
                              <Button type="submit">Salvar Preferências</Button>
                            </div>
                          </form>
                        </Form>
                      </CardContent>
                    </Card>
                  </BlurContainer>
                </TabsContent>

                <TabsContent value="security">
                  <BlurContainer>
                    <Card>
                      <CardHeader>
                        <CardTitle>Segurança da Conta</CardTitle>
                        <CardDescription>
                          Altere sua senha e configure opções de segurança
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <FormLabel htmlFor="current-password">
                              Senha Atual
                            </FormLabel>
                            <Input id="current-password" type="password" />
                          </div>

                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <FormLabel htmlFor="new-password">
                                Nova Senha
                              </FormLabel>
                              <Input id="new-password" type="password" />
                            </div>

                            <div className="space-y-2">
                              <FormLabel htmlFor="confirm-password">
                                Confirmar Nova Senha
                              </FormLabel>
                              <Input id="confirm-password" type="password" />
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <Button>Alterar Senha</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurContainer>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Settings;
